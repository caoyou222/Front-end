from django.test import TestCase, Client
from .views import tag_view
from django.http import HttpRequest
from django.urls import revers, resolve

class tag_view_test(TestCase):
	
	def setUp(self):
		self.client = Client()

	def test_root_url_resolves_to_tag_view(self):
		found = resolve('/searchengine/')
		self.assertEqual(found.func,tag)

	def test_tag_view_returns_returns_proper_name(self):
		response = self.client.get(reverse('tag_view',args=[2]))
		html = response.content.decode('utf8')
		self.assertIn('ttt', html)

