import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  imports: [],
  selector: 'about-page',
  styles: ``,
  template: `
    <h1 class="text-3xl">About Page</h1>
    <hr class="my-2" />

    <section>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aut consequuntur culpa
        dignissimos ea, eligendi fugiat illo laboriosam nihil nobis odio optio praesentium quaerat
        quasi quidem reprehenderit saepe, sit! A ab adipisci aperiam, asperiores aut commodi
        dignissimos doloremque dolores doloribus ea ex explicabo impedit ipsa minus nisi non nostrum
        nulla odio odit officia perferendis provident quaerat qui quia ratione recusandae,
        reiciendis repudiandae sit tempore ut veritatis vitae voluptatibus voluptatum? Accusantium
        deserunt doloribus eos laudantium obcaecati officia perferendis repellendus sed. Dignissimos
        esse, inventore odio quis quo repellendus temporibus voluptatum. Atque blanditiis eos
        eveniet hic illo placeat quia quibusdam repellat ut, vitae!
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
      document.title="About Page Browser"
    }


    this.title.setTitle('About| ');
    this.meta.updateTag({ name: 'description', content: `About Page SSR ` });
    this.meta.updateTag({ name: 'og:title', content: `About Page` });
    this.meta.updateTag({ name: 'keywords', content: `about,angular,ssr` });

  }
}
