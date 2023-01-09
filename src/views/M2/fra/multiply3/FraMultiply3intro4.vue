<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    let notes = await SQLiteService.notes(this.$route.name)
    for (var i = 0; i< notes.length; i++){
      var noteid = notes[i].noteid
      document.getElementById(noteid).value =notes[i].note
    }
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('fra-multiply3-index')">
        <img src="@/assets/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<h1>Période 4: former les leaders pour les nouveaux centres de mouvement (2e voyage missionnaire à partir d’Antioche)</h1>
<div id="showVideoOptions"></div>
  <h1><img alt="" src="@/assets/images/eng/multiply3/Trip2.png" /></h1>

<p>(2e voyage missionnaire &agrave; partir d&rsquo;Antioche) [49 - 51 ap. J.-C.]</p>

<h2>R&eacute;sum&eacute;&nbsp;</h2>

<p>Cette p&eacute;riode couvre le voyage de la deuxi&egrave;me &eacute;quipe de mission envoy&eacute;e d&#39;Antioche. Cette p&eacute;riode est marqu&eacute;e par l&#39;ouverture de nouveaux centres provinciaux pour l&#39;&Eacute;vangile, des mouvements croissants de formation de disciples et la mobilisation des ouvriers suppl&eacute;mentaires pour le Royaume.</p>

<h2>Les lettres &eacute;crites au cours de cette p&eacute;riode</h2>

<ul>
	<li>1 Thessaloniciens, 50/51 ap. J.-C.</li>
	<li>2 Thessaloniciens, 50/51 ap. J.-C.<br />
	&nbsp;</li>
</ul>

<p>&nbsp;</p>


<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/images/standard//OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social" @click="share('languages', '', '')">
				  <img class="social" src="@/assets/images/standard/languages.png" />
			  </td>
			  
			<td class="social"  @click="share('android', 'fra', '')">
				<img  class="social" src="@/assets/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Période 4: former les leaders pour les nouveaux centres de mouvement (2e voyage missionnaire à partir d’Antioche): ', '/content/M2/fra/multiply3/multiply3intro4.html')">
				<img class="social" src="@/assets/images/standard/Share.png" />
			</td>
		</tr>
	</tbody>
</table>
<div class="footer">
<p class="footer">MC2</p>
<p class="footer" @click="share('website', 'https://GlobalChurchMovements.org', '')"> GlobalChurchMovements.org</p>
</div>

<!-- end mc2 sdcard languageFooter -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->