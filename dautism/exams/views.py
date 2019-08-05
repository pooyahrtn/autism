from rest_framework import viewsets, mixins
from . import models
from . import serializers


class ExamViewSet(viewsets.GenericViewSet,
                  mixins.RetrieveModelMixin):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = models.Exam.objects.all()
    serializer_class = serializers.ExamSerializer
    lookup_field = 'pk'

    def get_object(self):
        return models.Exam.objects.order_by('pk')[0]


class AnswerViewSet(viewsets.GenericViewSet,
                    mixins.CreateModelMixin):
    queryset = models.Answer.objects.all()
    serializer_class = serializers.AnswerSerializer


class ExperimentViewSet(viewsets.GenericViewSet,
                        mixins.CreateModelMixin):
    queryset = models.Experiment.objects.all()
    serializer_class = serializers.ExperimentSerializer

