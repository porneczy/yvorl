import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
    <div
        ref={ref}
        onScroll={(e) => {
            scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
            caption.current.innerText = scroll.current.toFixed(3)
        }}
        class="scroll">
        <div style={{ height: "400vh" }}>
            <div class="dot">
                <h1>Yvorl Kft.</h1>

            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div class="dot">
                <h1>Cégünkről</h1>
                Magyar tulajdonban lévő YVORL Informatikai Tanácsadó és Szolgáltató Kft. 2017 óta a kis-, közép- és nagyvállalatok informatikai szakembereinek tanácsadója. Munkatársaink fiatal, lendületes csapata mérnöki, gazdasági és informatikai tudással és szakmai tapasztalattal is rendelkezik, így az informatikai szaktanácsadás és szolgáltatás minden területén számíthat cégünkre.

                info@yvorl.hu
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div class="dot">
                <h1>Szoftverfejlesztés</h1>Cégünk alaptevékenysége informatikai rendszerek, egyedi szoftverek, adatbázisok tervezése és megvalósítása. Forduljon hozzánk bizalommal szoftverfejlesztési igényével, ötletével!
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div class="dot">
                <h1>Weboldal fejlesztés</h1>Cégünk jelentős szakmai tapasztalattal rendelkezik a webprogramozás területén. Vállaljuk webshopok, bemutatkozó oldalak, portálok tervezését, fejlesztését, valamint egyedi ötletek megvalósítását.
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div class="dot">
                <h1>Tanácsadás</h1>Felmérjük a vállalat igényeit, ennek megfelelően hozunk létre munkacsoportokat vagy készítünk tanulmányt, rendszertervet az Üzemeltetési, Biztonsági, Szoftverfejlesztési területeken. Igény szerint megtervezzük és megalkotjuk azokat az alkalmazásokat, amelyekkel a vállalkozás folyamatai standardizálhatók, optimalizálhatóak illetve automatizálhatók lesznek.

                Minden esetben az üzleti döntéshozók elvárásainak megfelelő, hatékony használatot biztosító megoldásokat ajánlunk és szállítunk és az általunk tett javaslatokra, illetve megvalósításokra garanciát is vállalunk.
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div class="dot">
                <h1>Projektvezetés</h1>A projektmenedzsment szolgáltatás szigorú módszertani alapokon nyugvó tevékenység, ami lehetővé teszi a feladatok sikeres elvégzését. Az alkalmazott módszerek alapján a megfelelő projektszervezet felállítása, a feladatok előkészítése, a munkák levezénylése, a folyamatos kontrol gyakorlása tartozik a felelősségei közé. A projekt végrehajtása során alkalmazott kontrolling és jelentési rendszer lehetőséget biztosít a megrendelő részére az esetleges korrekciókra.
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div class="dot">
                <h1>Rendszerintegráció</h1>A partnerünk informatikai alapinfrastruktúrájának tervezése, optimalizálása, illetve működésbeli támogatása. Mindez a hálózattervezéstől és annak kiépítéstől elindulva a munkaállomások különböző alkalmazásainak telepítésén, beállításán keresztül egészen a biztonságos internethasználat (tűzfalak és behatolásérzékelő-rendszerek) kialakításáig mindent magában foglalhat.
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div class="dot">
                <h1>Üzemeltetés és támogatás</h1>Kihelyezett rendszergazdai szolgáltatásokat nyújtunk valamint karbantartjuk a vállalat informatikai infrastruktúráját képező eszközöket, legyen az Windows, Linux vagy bármilyen UNIX alapú rendszer.

                Szerverkarbantartás
                Munkaállomások karbantartása
                Biztonsági mentések, archiválás
                Szerverek üzemeltetése
                Adatbázis-rendszerek üzemeltetése
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div class="dot">
                <h1>Referenciák</h1>
                TELEKOM Nyrt.
                NRG Services Kft.
                Fusiongate Kft.	DSG Services Kft
            </div>
        </div>
        <span class="caption" ref={caption}>
            0.000
        </span>
    </div>
))

export default Overlay
