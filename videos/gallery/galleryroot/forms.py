from django import forms
from user_tags.forms import UserTagsFormMixin
from .models import Video


class VideoModelForm(UserTagsFormMixin, forms.ModelForm):
    class Meta:
        model = Video
        fields = exclude = ['__all__']
