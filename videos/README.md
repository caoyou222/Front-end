# Team hcic-f17/videos
### Annie, Muchen, Andrew
## Introduction
This is a website buit in the frame django. Websites shows videos uploaded from the admin page and have features such as searhching and a tagging system. User could browse videos by clicking the corresponding tag(category) or enter tags or key words in the search bar. We also have a feature for user registration and log in.
## Quick Start
You need to have a systemwide install of pip package virtualenv. If you don't, run ```sudo -H pip install virtualenv```

```
cd /videos
virtualenv env
source env/bin/activate
pip install -r requirements.txt
```

## Useful Information
| Information | Name |
| --- | --- |
| Root django project | gallery |
| Django app | searchengine |

Currently working off of the tutorial on Django's own site ([Link](https://code.djangoproject.com/wiki/searchengine))
