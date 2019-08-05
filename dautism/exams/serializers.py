from rest_framework import serializers
from django.shortcuts import get_object_or_404
from . import models
from posts.serializers import PostSerializer
from posts.models import Post


class ExamSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True)

    class Meta:
        model = models.Exam
        fields = ('pk', 'version', 'posts')


class AnswerSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all(), required=True)
    answer = serializers.IntegerField(required=True)

    class Meta:
        model = models.Answer
        fields = ('answer', 'post')

    # def create(self, validated_data):
    #     post_id = validated_data.pop('post')
    #     post = get_object_or_404(Post, pk=post_id)
    #     return self.Meta.model.objects.create(post=post, **validated_data)


class ExperimentSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True,)
    exam = serializers.PrimaryKeyRelatedField(queryset=models.Exam.objects.all(), required=True)

    class Meta:
        model = models.Experiment
        fields = ('exam', 'start_time', 'end_time', 'name', 'age', 'answers')

    def create(self, validated_data):
        answers_data = validated_data.pop('answers')
        experiment = models.Experiment.objects.create(**validated_data)
        for a in answers_data:
            models.Answer.objects.create(**a, experiment=experiment)
        return experiment
