from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST


# Create your views here.
# @require_POST
# def login_view(request):
#     data = json.loads(request.body)
#     username = data.get("username")
#     password = data.get("password")

#     if username is None or password is None:
#         return JsonResponse({"detail": "Please provide Username and Password"})
#     user = authenticate(username=username, password=password)
#     if user is None:
#         return JsonResponse({"detail": "invalid credentials"}, status=400)
#     login(request, user)
#     return JsonResponse({"details": "Succesfully logged in"})


# def logout_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({"detail": "You are not logged in!"}, status=400)
#     logout(request)
#     return JsonResponse({"detail": "Succesfully logged out!"})


# @ensure_csrf_cookie
# def session_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({"isauthenticated": False})
#     return JsonResponse({"isauthenticat": True})


# def whoami_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({"isauthenticated": False})
#     return JsonResponse({"username": request.user.username})


def getRoutes(request):
    routes = [
        "/api/token",
        "/api/token/refresh",
    ]

    return JsonResponse(routes, safe=False)
