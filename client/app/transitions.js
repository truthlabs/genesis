import util from './modules/util';

var queue = util.queue;

var transitions = {

  slideLeft: function(o){
    var q = [],
        $prev = o.previous.$el,
        $next = o.next.$el;

    q.push(function(cb){
      $next.css({
        opacity: 0,
        left: '50px'
      });
      cb();
    });
    q.push(function(cb){
      TweenLite.to($prev, 0.5, {
        left: '-50px',
        opacity: 0,
        ease:Expo.easeOut
      })
      TweenLite.to($next, 0.5, {
        left: 0,
        opacity: 1,
        delay: 0.0,
        ease:Expo.easeOut,
        onComplete: function(){
          cb();
        }
      });
    });
    _queue(q, function(){
      o.callback();
    });
  },

  slideRight: function(o){
    var q = [],
        $prev = o.previous.$el,
        $next = o.next.$el;

    q.push(function(cb){
      $next.css({
        opacity: 0,
        left: '-50px'
      });
      cb();
    });
    q.push(function(cb){
      TweenLite.to($prev, 0.5, {
        left: '50px',
        opacity: 0,
        ease:Expo.easeOut
      })
      TweenLite.to($next, 0.5, {
        left: 0,
        opacity: 1,
        delay: 0.0,
        ease:Expo.easeOut,
        onComplete: function(){
          cb();
        }
      });
    });
    _queue(q, function(){
      o.callback();
    });
  }

}

function _queue(q, result) {
  if (q.length) {
    q.shift()(function() {
      return _queue(q, result);
    });
  } else {
    return result();
  }
};

export default transitions;