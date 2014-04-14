# Copyright 2012 Digital Inspiration
# http://www.labnol.org/
import os
from google.appengine.ext.webapp import template
import webapp2


class MainPage(webapp2.RequestHandler):
    def get(self, q):
        if q is None:
            q = 'index.html'
            path = os.path.join(os.path.dirname(__file__), q)
            self.response.headers['Content-Type'] = 'text/html'
            self.response.out.write(template.render(path, {}))

app = webapp2.WSGIApplication([('/(.*html)?', MainPage)], debug=True)