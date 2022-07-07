from bottle import route, run as bottle_run, template
from fastai.vision.all import *

learn = load_learner('export.pkl')

@route('/checkimage/<image>')
def index(image):
    label, labelnum, probs = learn.predict(image)
    return {"label" : label, "classidx" : labelnum.item(), "probs": probs.tolist()}

bottle_run(host='localhost', port=8080)