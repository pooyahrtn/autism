from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'exams', views.ExamViewSet)
# router.register(r'answer', views.AnswerViewSet)
router.register(r'experiment', views.ExperimentViewSet)

urlpatterns = router.urls
