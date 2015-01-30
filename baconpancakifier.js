module.exports: function() {
    document.addEventListener("DOMContentLoaded", function(event) { 
        var pancakeTime = '<body style="background-image: url(http://glutenfreetastetest.com/wp-content/uploads/2014/03/making_bacon_pancakes_by_x_blackpearl_x-d679xcr.jpg); ';
        pancakeTime += 'cursor: url(http://vignette1.wikia.nocookie.net/hiddenchronicles/images/d/da/HO_RenoCasino_Bacon-icon.png/revision/latest?cb=20120803224919), auto;">';
        pancakeTime += '<marquee style="font-size: 5em; font-family: sans-serif; color: #fff">BACON PANCAAAAKES</marquee>';
        pancakeTime += '<div style="text-align: center; margin-top: 2em;"><iframe width="560" height="315" src="https://www.youtube.com/embed/m5HWG1zsses?autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
        pancakeTime += '</body>';

        document.write(pancakeTime);
        document.title = "TAKE SOME BACON AND PUT IT IN A PANCAKE";
    });
}
