import os
#  from django import forms
#  from user_tags.forms import UserTagsFormMixin
from django.utils.translation import gettext as _
from django.db import models
from django.core.files import File
from taggit.managers import TaggableManager
from django.urls import reverse
from django.db.models.signals import post_save
from django.dispatch import receiver
from moviepy.editor import VideoFileClip
from django.contrib.auth.models import User


#  class PrivateTag(from VideoFileClip)
    #  tag = TaggableManager

#  class VideoUser(#  usermodels from django):
    #  method which extracts tags for user
    #  UserTag = manytomany(PrivateTag)
    
#  class GlobalTag(from VideoFileClip)
    #  tag = manytomany(Video)
class GlobalTag(models.Model):
    tag_name = models.CharField(max_length=128)
    
    class Meta:
        ordering = ('tag_name', )

    def __str__(self):
        return self.tag_name



#  class GlobalTag(from VideoFileClip)
    #  tag = manytomany(Video)


#  class PrivateTag(from VideoFileClip)
    #  tag = TaggableManager

#  class VideoUser(#  usermodels from django):
    #  method which extracts tags for user
    #  UserTag = manytomany(PrivateTag)
    


class Video(models.Model):
    #  Add id
    #  Per user tagging system + global tagging system
    #  Reusing tags (tag suggestions via word cloud), capilization vs lower case agnostic system
    #  Student worker admin interface (not as powerful as superadmin)
    global_tag = models.ManyToManyField(GlobalTag, related_name='videos')
    video_name = models.CharField(max_length=50)
    video_pub_date = models.DateTimeField('date published')
    video_file = models.FileField()
    video_thumbnail = models.ImageField(null=True, blank=True)
    #  REMOVE video_tags after implementing GlobalTag, PrivateTag, and VideoUser
    
    #  Maybe we will implement a like field later on
    #  video_likes = models.IntegerField(default=0)
    video_views = models.IntegerField(default=0)
    class Meta:
        ordering = ('video_name', )

    TAG_FIELDS = {
        'user_tags': {
            'verbose_name': _('Tags'),
            'help_text': ('Help text'),
            'with_user': True,
        },
        'global_tags': {
            'verbose_name': _('Global Tags'),
            'with_user': False,
        }
    }

    #  A custom delete function needs to be defined so we actually delete the files along with the Database Entry
    def delete(self, *args, **kwargs):
        video_storage, video_path = self.video_file.storage, self.video_file.path
        thumbnail_storage, thumbnail_path = self.video_thumbnail.storage, self.video_thumbnail.path
        super(Video, self).delete(*args, **kwargs)
        video_storage.delete(video_path)
        thumbnail_storage.delete(thumbnail_path)

    def __str__(self):
        return self.video_name

    def most_recently_published(self):
        return self.objects.latest('video_pub_date')

    def grab_by_tags(self):
        return self.objects.all()

    def get_absolute_url(self):
        return reverse('searchengine:index')

#  class Tag
    #  Global (generally applies to each video)
    #  Per user tag (applies only to user)


#  class YourModel(models.Model):
#  class VideoModelForm(UserTagsFormMixin, forms.ModelForm):
    #  class Meta:
        #  model = Video
        #  fields = '__all__'


#  Needs to be run after every save to manually create an additional jpeg file to serve as the thumbnail picture for a given video
#  @receiver.... specifies that this should be run after new save every model Video object
@receiver(post_save, sender=Video)
def save_thumbnail(sender, instance, *args, **kwargs):
    #  We have to disconnect the post_save receiver pipeline since that will recursively trigger the regular model save when we do instance...save() in this function
    post_save.disconnect(save_thumbnail, sender=sender)
    #  Using the moviepy plugin, we will create a jpeg thumbnail clip = the video itself
    clip = VideoFileClip('media/' + instance.video_file.name)
    clip.save_frame('media/' + instance.video_file.name + '.jpg', t=5.00)  # Save the picture of the frame at exactly 5 seconds into the start of the movie
    f = open('media/' + instance.video_file.name + '.jpg', 'rb')  # We have to intially save the jpeg file so we can create the database instance of it. Since we are using instance.video_video.name the resulting jpg file will be named something like "****.mp4.jpg"
    instance.video_thumbnail.save(instance.video_file.name[:-4] + '.jpg', File(f))  # Now save the thumbnail we just created above into the database. This time around, we are saving the name as instance.video_video.name[:-4] which will take out of the string "mp4" out of the string; Hence, the resulting jpg file will be named something like "****.jpg"
    os.remove('media/' + instance.video_file.name + '.jpg')  # Since the above process created a new thumbnail, we have 2 jpeg files, 1) "***.mp4.jpg" 2) "***.jpg". Since we save the "***.jpg" as the file that got stored in the database, we no longer need the initial "***.mp4.jpg" file and remove it via os.remove()
    post_save.connect(save_thumbnail, sender=sender)  # Turn the post_save receiver pipeline so that regular save behavior can be resumed.
