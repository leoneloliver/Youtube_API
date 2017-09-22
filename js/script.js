// Youtube API - loading videos
function onYouTubeIframeAPIReady() {
    var player;
    //setting video id variable
    var vid = '1AzeIjQaZ58';
    player = new YT.Player('video', {
        videoId: vid , // YouTube Video ID
        playerVars: {
        autoplay: 0, // Auto-play the video on load
        controls: 1, // Show pause/play buttons in player
        showinfo: 1, // Hide the video title
        modestbranding: 1, // Hide the Youtube Logo
        loop: 1, // Run the video in a loop
        fs: 0, // Hide the full screen button
        cc_load_policty: 0, // Hide closed captions
        iv_load_policy: 3, // Hide the Video Annotations
        autohide: 0 // Hide video controls when playing
    },
    // setup events
    events: {
        onReady: function(e) {
            e.target.mute();
            var bplay = 0;
            var bottom = $('.get_top_video_start').offset().top;
            $(window).scroll(function(ev) {       
                if ($(this).scrollTop() > bottom && bplay == 0){
                    player.playVideo();
                    bplay = 1;
                    ev.preventDefault(); 
                }              
            });
        },
        // loop video  
        onStateChange: function(e){
            var id = vid;
            if(e.data === YT.PlayerState.ENDED){
                player.loadVideoById(id);
            }
        }
    }});
}
