var check = sessionStorage.getItem(['play']);
if (check === null) {
  var video = $('.video-area');
  $(function() {
    var h = $('html').height();
    var videoCss = {
      'height': h,
      'display': 'block'
    };
    $(video).css(videoCss);
    $('.close').on('click', function() {
      $(video).fadeOut(function() {
        $(video).remove();
      });
    });
  });
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('video', {
      width: 640,
      height: 390,
      videoId: '7GzusI89Hkk',
      playerVars: {
        rel: 0,
        autoplay: 1,
        playsinline: 1
      },
      events: {
        'onReady': onPlayReady,
        'onStateChange': onPlayerStateChang
      }
    });
  };

  function onPlayReady(event) {
    var player = event.target;
    player.mute();
    player.playVideo();
  };

  function onPlayerStateChang(event) {
    var ytStatus = event.data;
    if (ytStatus == YT.PlayerState.ENDED) {
      console.log("ok");
      $(video).fadeOut();
    };
  };
  sessionStorage.setItem('play', 1);
};