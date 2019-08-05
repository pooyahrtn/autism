from django.contrib import admin
from . import models


class ExamAdmin(admin.ModelAdmin):
    pass


class AnswerInline(admin.StackedInline):
    model = models.Answer
    extra = 0


class ExperimentAdmin(admin.ModelAdmin):
    inlines = [AnswerInline,]


admin.site.register(models.Exam, ExamAdmin)
admin.site.register(models.Experiment, ExperimentAdmin)