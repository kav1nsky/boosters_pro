from django.http import HttpResponse
from django.shortcuts import render

from mainapp.models import ForecastTable
import numpy as np


def calculate_mae_and_mape(lines, forecast_title):
    forecast_data = ForecastTable.objects.get(name=forecast_title).data
    forecast_lines = forecast_data.splitlines()[1:]
    forecast_values = np.array([np.float16(v.split(',')[1]) for v in forecast_lines])
    data_to_test = np.array([np.float16(v.split(',')[1]) for v in lines])

    mae = 0
    mape = 0
    for i in range(len(forecast_values)):
        tmp = forecast_values[i] - data_to_test[i]
        mae += np.absolute(tmp)
        if forecast_values[i] != 0:
            mape += np.absolute(tmp / forecast_values[i])
    return {'mae': mae / len(forecast_values), 'mape': mape / len(forecast_values)}


def upload_csv(request):
    if request.method == 'GET':
        return render(request, 'upload_csv.html')
    csv_file = request.FILES['csv1']
    if not csv_file.name.endswith('.csv'):
        return HttpResponse('Unable to load file', status=500)
    if csv_file.multiple_chunks():
        return HttpResponse("Uploaded file is too big (%.2f MB)." % (csv_file.size / (1000 * 1000),), status=500)

    file_data = csv_file.read().decode("utf-8").splitlines()

    return render(request, 'upload_csv.html', calculate_mae_and_mape(file_data, 'boosters_test'))

