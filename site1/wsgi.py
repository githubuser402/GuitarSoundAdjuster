"""
WSGI config for site1 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

import os
import sys

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'site1.settings')
sys.path.append('/home/arty/Documents/projects/proj_1/site1')

application = get_wsgi_application()
