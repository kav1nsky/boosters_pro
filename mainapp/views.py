import numpy as np
from django.http import HttpResponse
from django.shortcuts import render
from mainapp.models import ForecastTable


def calculate_mae(ideal_data, data_to_be_tested):
    return np.absolute(ideal_data - data_to_be_tested).mean


# wiki tells that if actual value = 0, mape = INF, but we can somehow calculate it by np.zeros if 0
def calculate_mape(ideal_data, data_to_be_tested):
    diff = ideal_data - data_to_be_tested
    return np.absolute(np.divide(diff, data_to_be_tested, out=np.zeros_like(diff), where=data_to_be_tested != 0)).mean


def calculate_mae_and_mape(lines, forecast_title):
    forecast_data = ForecastTable.objects.get(name=forecast_title).data
    forecast_lines = forecast_data.splitlines()[1:]
    forecast_values = np.array([np.float16(v.split(',')[1]) for v in forecast_lines])
    data_to_test = np.array([np.float16(v.split(',')[1]) for v in lines])
    return {'mae': calculate_mae(forecast_values, data_to_test), 'mape': calculate_mape(forecast_values, data_to_test)}


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


def login_page_view(request):
    return render(request, template_name='login.html')