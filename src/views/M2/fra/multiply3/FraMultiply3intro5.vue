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
<h1>Période 5:  Envoyer, multiplier et coacher les mouvements (3e voyage missionnaire à partir d’Antioche)</h1>
<div id="showVideoOptions"></div>
  <h1><img alt="" src="@/assets/images/eng/multiply3/Trip3.png" /></h1>

<p>(3e voyage missionnaire &agrave; partir d&rsquo;Antioche) [52 -57 ap.J.-C.]</p>

<h2>R&eacute;sum&eacute;</h2>

<p>Cette p&eacute;riode couvre environs &nbsp;cinq ann&eacute;es. Plusieurs centres de mouvement ont d&eacute;j&agrave; commenc&eacute; &agrave; multiplier des disciples et des &eacute;glises depuis plus de 6 ans. Pendant cette p&eacute;riode, un grand centre de mouvement d&rsquo;envoi en mission est fond&eacute; en &Eacute;ph&egrave;se. &nbsp;Pendant que l&rsquo;implantation d&rsquo;&eacute;glise s&rsquo;enracinait, les leaders ont &eacute;t&eacute; envoy&eacute;s et les &eacute;glises existantes se faisaient coacher. La p&eacute;riode est marqu&eacute;e par une formation quotidienne, des miracles spectaculaires, de r&eacute;daction de lettres et l&rsquo;expansion du royaume au point o&ugrave; toute la partie orientale de l&rsquo;Empire Romain est finalement atteinte.</p>

<h2>Les lettres &eacute;crites pendant cette p&eacute;riode :</h2>

<ul>
	<li>1 Corinthiens, 55 ap.J.-C.</li>
	<li>2 Corinthiens, 56 ap.J.-C.</li>
	<li>Romains, 57 ap.J.-C.</li>
</ul>


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

			<td class="social" @click="share('lesson', 'Période 5:  Envoyer, multiplier et coacher les mouvements (3e voyage missionnaire à partir d’Antioche): ', '/content/M2/fra/multiply3/multiply3intro5.html')">
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