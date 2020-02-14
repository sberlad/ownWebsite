const styleHome = {
    "background-image": "url(../images/_DZ25684newsize.jpg)", 
    "background-size": "cover",
    "background-repeat": "no-repeat", 
    "object-fit": "cover",
}

$("document").ready( () => {
    $("#content").css(styleHome);
});
    
$("#home").click( () => {
    $("#content").html("");
    $("#content").removeAttr("style");
    $("#content").css(styleHome);
});

$("#news").click( () => {
    $("#content").html("<iframe src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsamuel.berlad%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId' width='500' height='500' style='border: 1em solid #000; overflow:hidden; align-self: center; margin-top: 2em;' scrolling='no' frameborder='0' allowTransparency='true' allow='encrypted-media'></iframe>");
    $("#content").removeAttr("style");
    $("#content").css({
        "justify-content": "center",
    })
});

$("#bio").click( () => {
    const bioText = 
    `German-American baritone Samuel Berlad earned his Master's degree in opera with Prof. Thomas Heyer in 2012 from the Hochschule für Musik und Darstellende Kunst in Frankfurt, after completing a diploma in vocal pedagogy (Wiesbadener Musikakademie). <br>
    Currently, he is working with Rosemarie Danziger and Sherman Lowe. <br>
    Mr. Berlad was selected as a Britten-Pears Young Artist for 2016.  <br>
    He has participated in masterclasses with Rudolf Piernay, Mark Padmore, Helmut Deutsch, Roger Vignoles, Malcolm Martineau, and Thomas Quasthoff. <br> 
    Mr. Berlad has performed the role of Papageno in Mozart’s 'The Magic Flute', Collatinus in Britten’s 'The Rape of Lucretia', the title role in Ullmann’s 'The Emperor of Atlantis', Figaro Paisiello's 'Il barbiere di Siviglia' and Fiorello in the more popular version by Rossini, Il Conte as well as Figaro in Mozart’s 'Le Nozze di Figaro', the title role as well as Leporello in Mozart’s 'Don Giovanni', The Imperial Commissioner in ‘Madama Butterfly’, Pluto in Telemann’s Orfeus, Escamillo in Bizet’s Carmen and most recently Marullo in Verdi's 'Rigoletto'. <br> He has appeared in venues such as the Frankfurt's Alte Oper, Sherover Hall in Jerusalem Theatre, and Snape Maltings Concert Hall (Suffolk, England). <br> Mr. Berlad’s concert repertoire comprises major oratorios and art songs. <br> His recent recital of Schubert's Die Schöne Müllerin with Jonathan Zak was highly acclaimed, as was his broadcast of Ferdinand Hiller songs for the West German Radio (WDR).`
        
    const bioContent = `<div id="biopic"></div><div id="biotext"><h3>Biography</h3><p>` + bioText + `</p><h6>Photo: Larry Brandt</h6></div>`
        
    $("#content").removeAttr("style");
    $("#content").html(bioContent);
    

    $("#content").css({
        "grid-template-columns": ".75fr 1.25fr",
    });

    $("#biopic").css({
        "background-image": "url(../images/papageno1.jpg)",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-color": "black",
    });

    $("#biotext").css({
        "color": "black",
        "text-align": "justify",
        "padding-left": "1em",
        "padding-right": "1em",
        "display": "grid",
    });

    $("h6").css({
        "align-self": "flex-end",
    });
});

$("#videos").click( () => {
    const videosContent = `
    <h3>Video Recordings</h3>
    <div class="music">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0sKHK6MwWqU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`
    $("#content").removeAttr("style");
    $("#content").html(videosContent);
    $("h3").css({
        "align-self": "center",
    })
});

$("#music").click( () => {
    const musicContent = `
     <h3>Audio Recordings</h3>
    <div class="music">
        <iframe width="80%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/437442444&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <iframe width="80%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/421269819&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>`
    $("#content").removeAttr("style");
    $("#content").html(musicContent);
    $("h3").css({
        "align-self": "center",
    })
});

$("#gallery").click( () => {
    const galleryContent = `
        <h3>Stage Photographs</h3>
        <div class="gallery">
            <a href="images/gallery/flute1.jpg" data-lightbox="stagepics"><img src="images/gallery/thumbnails/flute1_tn.jpg" alt="" srcset=""></a>
            <a href="images/gallery/flute2.jpg" data-lightbox="stagepics"><img src="images/gallery/thumbnails/flute2_tn.jpg" alt="" srcset=""></a>
            <a href="images/gallery/flute3.jpg" data-lightbox="stagepics"><img src="images/gallery/thumbnails/flute3_tn.jpg" alt="" srcset=""></a>
            <a href="images/gallery/flute4.jpg" data-lightbox="stagepics"><img src="images/gallery/thumbnails/flute4_tn.jpg" alt="" srcset=""></a>
            <a href="images/gallery/dg1.jpg" data-lightbox="stagepics"><img src="images/gallery/thumbnails/dg1_tn.jpg" alt="" srcset=""></a>
            <a href="images/gallery/dg2.jpg" data-lightbox="stagepics"><img src="images/gallery/thumbnails/dg2_tn.jpg" alt="" srcset=""></a>
            <a href="images/gallery/dg3.jpg" data-lightbox="stagepics"><img src="images/gallery/thumbnails/dg3_tn.jpg" alt="" srcset=""></a>
            <a href="images/gallery/dg4.jpg" data-lightbox="stagepics"><img src="images/gallery/thumbnails/dg4_tn.jpg" alt="" srcset=""></a>
            <a href="images/gallery/lucretia1.jpeg" data-lightbox="stagepics"><img src="images/gallery/thumbnails/lucretia1_tn.jpg" alt="" srcset=""></a>
        </div>`;
    $("#content").removeAttr("style");
    $("#content").html(galleryContent);
    $("h3").css({
        "align-self": "center",
    });
    $(".gallery").css({
        "display": "grid",
        "grid-template-columns": "1fr 1fr 1fr",
        "align-self": "center",
    });
    $(".gallery img").css({
        "max-width": "250px",
        "padding": ".5em",
    });
});