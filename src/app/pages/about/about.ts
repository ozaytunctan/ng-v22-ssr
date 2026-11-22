import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  imports: [],
  selector: 'about-page',
  styles: ``,
  template: `
    <h1 class="text-3xl">Hakkımda</h1>
    <hr class="my-2" />

    <section>
      <p class="mb-4">
        Özay TUNÇTAN
        Siirt Universitesi Bilgisayar Mühendisliği bölümünden 2017 yılında mezun oldum .
        Şuan <b>T.C İçişleri Bakanlığı</b> Bilgi Teknolojileri Genel Müdürlüğünde Yazılım Uzmanı olarak
        görev yapmaktayım.
      </p>
    </section>
  `,
})
export class About implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform=inject(PLATFORM_ID);
  ngOnInit(): void {
    console.log("platform:",this.platform)
    //document.title='About Page';//server.js node js document erişmez ssr
    // console.log({name: 'About'});
    // console.log(document);//
    console.log({isServer:isPlatformServer(this.platform)});//client tarafı false server tarafında true olacaktır.
    //node js tarafında document, navigator vb erişilemez. hata alınmaması adına bu şekilde bir kontrol gerekir.
    if (isPlatformBrowser(this.platform)){
      // document.title="Hakkımda"
    }


    this.title.setTitle('Hakkımda| ');
    this.meta.updateTag({ name: 'description', content: `Özay TUNÇTAN | ` });
    this.meta.updateTag({ name: 'og:title', content: `Hakkımda` });
    this.meta.updateTag({ name: 'keywords', content: `Java , Spring & Spring Boot , Angular ` });

  }
}
