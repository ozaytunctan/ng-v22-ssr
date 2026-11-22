import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  imports: [],
  selector: 'about-page',
  styles: ``,
  template: `
    <section id="about" class="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-16">
      <div class="mx-auto max-w-6xl">

        <!-- Section Header -->
        <div class="mb-12">
      <span class="mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">
        <span class="h-px w-8 bg-cyan-400"></span>
        Hakkımda
      </span>

          <h2 class="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Teknolojiyle değer üreten,
            <span class="text-cyan-400"> sürdürülebilir çözümler </span>
            geliştiren bir mühendis.
          </h2>
        </div>

        <!-- Content -->
        <div class="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">

          <!-- Biography -->
          <div class="space-y-6">
            <p class="text-lg leading-9 text-slate-300">
              Ben <strong class="font-semibold text-white">Özay TUNÇTAN</strong>.
              Siirt Üniversitesi Bilgisayar Mühendisliği bölümünden
              2017 yılında mezun oldum. Hâlihazırda
              <strong class="font-semibold text-white">
                T.C. İçişleri Bakanlığı Bilgi Teknolojileri Genel Müdürlüğü
              </strong>
              bünyesinde Yazılım Uzmanı olarak görev yapıyorum.
            </p>

            <p class="text-base leading-8 text-slate-400">
              Yazılım geliştirme süreçlerinde yalnızca çalışan uygulamalar
              oluşturmayı değil; ölçeklenebilir, sürdürülebilir, güvenli
              ve bakımı kolay yazılım mimarileri tasarlamayı önemsiyorum.
              Kurumsal ihtiyaçları doğru analiz ederek teknik gereksinimleri
              uzun vadeli çözümlere dönüştürmeye odaklanıyorum.
            </p>

            <p class="text-base leading-8 text-slate-400">
              Modern yazılım geliştirme yaklaşımları, katmanlı mimari,
              nesne yönelimli programlama ve güncel web teknolojileri
              doğrultusunda kendimi sürekli geliştiriyor; yazılımın
              mimarisinden geliştirme süreçlerine kadar bütünsel bir
              bakış açısıyla hareket ediyorum.
            </p>

            <!-- Focus Areas -->
            <div class="flex flex-wrap gap-3 pt-4">
          <span class="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            Software Architecture
          </span>
              <span class="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            Backend Development
          </span>
              <span class="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            Frontend Development
          </span>
              <span class="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            Enterprise Solutions
          </span>
            </div>
          </div>

          <!-- Professional Profile -->
          <aside class="rounded-2xl border border-slate-800 bg-slate-900/70 p-7 shadow-xl">
            <div class="mb-7">
          <span class="text-sm font-medium tracking-wider text-cyan-400 uppercase">
            Professional Profile
          </span>
              <h3 class="mt-3 text-2xl font-bold text-white">
                Özay TUNÇTAN
              </h3>
              <p class="mt-2 text-sm leading-6 text-slate-400">
                Bilgisayar Mühendisi · Yazılım Uzmanı
              </p>
            </div>

            <div class="space-y-5">
              <div class="border-b border-slate-800 pb-4">
            <span class="text-xs font-medium tracking-wider text-slate-500 uppercase">
              Eğitim
            </span>
                <p class="mt-2 font-medium text-slate-200">
                  Bilgisayar Mühendisliği
                </p>
                <p class="mt-1 text-sm text-slate-400">
                  Siirt Üniversitesi · 2017
                </p>
              </div>

              <div class="border-b border-slate-800 pb-4">
            <span class="text-xs font-medium tracking-wider text-slate-500 uppercase">
              Kurum
            </span>
                <p class="mt-2 font-medium text-slate-200">
                  T.C. İçişleri Bakanlığı
                </p>
                <p class="mt-1 text-sm text-slate-400">
                  Bilgi Teknolojileri Genel Müdürlüğü
                </p>
              </div>

              <div>
            <span class="text-xs font-medium tracking-wider text-slate-500 uppercase">
              Uzmanlık Alanı
            </span>
                <p class="mt-2 font-medium text-slate-200">
                  Kurumsal Yazılım Geliştirme
                </p>
                <p class="mt-1 text-sm text-slate-400">
                  Yazılım Mimarisi ve Web Teknolojileri
                </p>
              </div>
            </div>
          </aside>

        </div>
      </div>
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
