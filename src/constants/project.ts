import type { ProjectItem } from '@/types';
import joinToEnjoy from '@/assets/img/projects/join-to-enjoy-cover.jpg';
import singToTheMoon from '@/assets/img/projects/sing-to-the-moon-cover.png';
import club from '@/assets/img/projects/club-cover.jpg';
import lifeStyle from '@/assets/img/projects/life-style-cover.jpg';
import ican from '@/assets/img/projects/ican-cover.png';
import solc from '@/assets/img/projects/solc-cover.jpg';
import mx from '@/assets/img/projects/mx-cover.jpg';
import mxDesign from '@/assets/img/projects/mx-design.png';
import moonShare from '@/assets/img/projects/moon-share.png';


export const PROJECT_LIST: ProjectItem[] = [
  {
    id: 'join-to-enjoy',
    title: '優勢韌力探索平台 | 從 0 到 1 建置 B2B 平台',
    description: '透過線上優勢韌力專業量表來自我探索，整合「優勢韌力測驗」、「預約排程」、「數據報表」等功能，一站式平台解決原本由人工填寫、排程、報表分散不同地方的痛點。',
    image: joinToEnjoy,
    tags: ['Vue', 'Vuetify', 'Chart.js', 'Pinia', 'CI/CD'],
    date: '2024/11 ~ 進行中',
    itemList: [
      {
        type: 'title',
        content: '排程管理與預約系統整合',
      },
      {
        type: 'quote',
        content: '挑戰：為了解決優勢韌力測驗後的「解測預約」流程碎片化問題，需要建立一套支持多企業的排程系統，在既有的權限架構下，精確關聯不同企業客戶、對應的心理諮商所及其所屬心理師，確保管理者能自行調整會議室與時間資源，並實現與前台預約平台數據同步。'
      },
      {
        type: 'subtitle',
        content: '權限控管與數據同步'
      },
      {
        type: 'content',
        content: '透過既有的權限架構（角色、帳號），新增諮商所與心理師綁定的關係，確保管理者能根據企業的設定自動篩選對應諮商所與心理師名單，並且同步於前台預約平台，讓管理人員、人資能掌握解測預約進度。'
      },
      {
        type: 'subtitle',
        content: '高效排程管理模組',
      },
      {
        type: 'content',
        content: '開發後台排程功能，整合起訖日期、會議室資源與心理師排班設定，提供直覺的介面讓管理者能快速建立解測的前期建置。'
      },
      {
        type: 'subtitle',
        content: '完善流程 X 流程數位化',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '成功將原本人工對接的預約流程轉化為數位系統，大幅縮短了行政作業時間與溝通成本，並且也將該平台建立起一套完整服務鏈。'
      },
      {
        type: 'title',
        content: '高效能動態圖表模組開發',
      },
      {
        type: 'quote',
        content: '挑戰：該專案需呈現多維度數據（如圓餅圖、條狀圖、雷達圖），若一次性載入大量 Chart.js 函式庫與圖表組件，將導致首屏載入過慢，且前後台相同圖表分別使用亦會增加維護成本。'
      },
      {
        type: 'subtitle',
        content: '效能優化與按需載入',
      },
      {
        type: 'content',
        content: '實施程式碼分割策略，僅在使用者切換至特定頁面時才加載對應圖表，減少初始加載體積。',
      },
      {
        type: 'subtitle',
        content: '組件化架構設計'
      },
      {
        type: 'content',
        content: '將圖表邏輯封裝為高可複用性的通用組件，與後端討論傳輸資料格式，實現前後台系統間的組件共享。',
      },
      {
        type: 'subtitle',
        content: '動態交互實現'
      },
      {
        type: 'content',
        content: '結合 IntersectionObserver API 與 Chart.js 實作「視口觸發動畫」，確保圖表僅在進入使用者視野時才執行繪製圖表動畫。',
      },
      {
        type: 'subtitle',
        content: '「增強視覺互動體驗 X 優化開發效率」',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '兼顧數據圖表閱讀趣味性的同時，透過按需載入有效降低首屏資源請求量，顯著提升網頁渲染效能與使用者體驗，並且透過組件化設計減少一半重複開發時間，大幅提升後期維護成本。'
      },
      {
        type: 'title',
        content: 'Icon 模組優化',
      },
      {
        type: 'quote',
        content: '挑戰：原專案採用 Vuetify 預設的 Icon Fonts 載入方式，雖便於開發，但會導致瀏覽器在初始階段載入完整的 Material Design Icons 字體包。這種「全量載入」的模式造成了不必要的資源浪費，成為首屏載入效能的瓶頸，影響了網站效能的指標。'
      },
      {
        type: 'subtitle',
        content: '技術方案轉型與集中管理',
      },
      {
        type: 'content',
        content: '廢除 Material Design Icons Font 引入，使用 @mdi/js 的 SVG 載入方案，建立專門管理icon 的 icon.js，透過「集中宣告、統一導出」的架構，確保專案中使用的所有圖標皆有跡可循。'
      },
      {
        type: 'subtitle',
        content: '實施按需引入',
      },
      {
        type: 'content',
        content: '在各頁面與組件中僅導入所需的 Icon ，確保最終打包結果中僅包含專案真正使用的資源。',
      },
      {
        type: 'subtitle',
        content: '資源體積大幅縮減 X 提升開發維護性',
        class: 'text-accent'
      },
      {
        type: 'content',
        content: '在程式方面，透過集中化的管理模式，讓圖標的重用與更換更加透明化，避免了程式碼中出現多餘或重複定義的情況。而在網頁效能方面，成功將圖標相關的<span class="text-accent">初始載入資源體積降低 50% 以上</span>，顯著提升了網站的加載速度。'
      },
      {
        type: 'title',
        content: '問卷管理系統與數據整合',
      },
      {
        type: 'quote',
        content: '挑戰：將原本分散於外部系統的問卷功能整合至該平台，以實現一站式管理。需要建立一個靈活的後台系統，支持多樣化的題型（單選、多選、量表、簡答），並確保操作流暢性的同時，處理複雜的 CRUD 邏輯與填答數據的可視化。'
      },
      {
        type: 'subtitle',
        content: '靈活題型架構設計 & 交互體驗優化',
      },
      {
        type: 'content',
        content: '設計具擴展性的架構，統一管理單選、多選、程度題及簡答題等多種題型，管理者能在後台自定義配置。同時，搭配 vuedraggable 實作拖拽式介面，讓管理者能直覺地調整題目順序，大幅提升後台操作的流暢度與效率。'
      },
      {
        type: 'subtitle',
        content: '數據整合與視覺化',
      },
      {
        type: 'content',
        content: '開發問卷統計模組，將前端收集的填答數據回傳至後台，並轉化為具備參考價值的圖表分析。'
      },
      {
        type: 'subtitle',
        content: '平台功能一體化 X 提升用戶操作體驗',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '成功將第三方問卷需求移轉至自有平台，達成 All-in-one 的整合目標，降低了組織的跨系統管理成本與解決業務需求，透過拖拽式 UI 設計，顯著優化了問卷製作的流程，獲得後台管理使用者的高度滿意。',
      },
      {
        type: 'title',
        content: '未來長期維運的準備'
      },
      {
        type: 'content',
        content: '因後續頻繁維運的需求，為簡化開發流程而設定了 CI/CD，只要推版即立即更新測試站，減去拖曳上傳檔案的瑣碎時間，同時為後續開發人員能專注於功能修改。'
      },
      {
        type: 'link',
        content: '更多關於練息場官網',
        path: 'https://www.jointoenjoy.com/',
      },
      
    ]
  },
  {
    id: 'sing-to-the-moon',
    title: 'Sing to the Moon | AI 生成音樂中秋體驗',
    description: '在 2024 年的中秋節，推出了一款由 AI 生成的數位音樂體驗，透過 AI 生成的音樂（Suno）與生命靈數的結合，打造屬於個人的「人生主題曲」，為品牌帶來新的送禮體驗。',
    image: singToTheMoon,
    // website: [{ type: 'official', url: 'https://moon2024.mxlab.space/' }],
    tags: ['Vue', 'Pinia', 'Vue-router', 'Tailwind CSS', 'Vite'],
    date: '2024/09',
    itemList: [
      {
        type: 'title',
        content: 'AI 生成音樂與打造流暢的視覺體驗',
      },
      {
        type: 'quote',
        content: '挑戰：重新定義「送禮」的意義，將線下禮盒延伸至線上數位體驗，如何利用 AI 生成技術（Suno）打造一個個人化且具備社群擴散力的網站，同時需要克服等待 AI 生成音樂的漫長時間裡，維持使用者高留存率與互動感。',
      },
      {
        type: 'subtitle',
        content: '架構選擇與狀態管理',
      },
      {
        type: 'content',
        content: '使用 Vue 搭配 Pinia 構建高性能的前端架構，用來儲存使用者輸入（生命靈數、音樂風格）與 AI 生成狀態的資料流。',
      },
      {
        type: 'subtitle',
        content: '優化用戶等待體驗',
      },
      {
        type: 'content',
        content: '設計動態視覺效果搭配個人化內容展示（生命靈數解析），巧妙地運用 AI 運算音樂的空白時間，轉化為生命靈數探索的沉浸體驗。',
      },
      {
        type: 'subtitle',
        content: '跨平台行銷整合',
      },
      {
        type: 'content',
        content: '透過社群分享機制與 EDM 發送，將線下限量 80 份禮盒的影響力，透過「專屬人生主題曲」的線上分享功能，達成跨平台傳播。',
      },
      {
        type: 'image',
        content: '分享至社群平台讓大家體驗創造個人主題曲！',
        path: moonShare
      },
      {
        type: 'subtitle',
        content: '極高轉換與擴散效應 X 驅動潛在商機',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '在零付費推廣下，創造了高達 <span class="text-accent"> 99 倍</span> 的互動成效，並展現 <span class="text-accent">20 倍</span> 的社群擴散率，成功打破線下禮盒的數量限制。同時，憑藉創新的 AI 整合體驗與優異的傳播數據，成功吸引多位客戶主動洽詢合作，為公司開發了具備高轉化率的潛在商機。',
      },
      {
        type: 'title',
        content: '安全防護與 AI API 成本優化',
      },
      {
        type: 'quote',
        content: '本專案涉及 AI Suno 自動生成音樂，每一筆 API 呼叫皆需產生實質成本。若遭受惡意爬蟲或機器人大量重複請求，將導致開發預算迅速耗盡。因此如何在確保用戶輸入資料正確性的同時，建立一道堅固的資安防禦牆，防止惡意攻擊造成的財務損失。'
      },
      {
        type: 'subtitle',
        content: '雙重驗證機制實作',
      },
      {
        type: 'content',
        content: '整合 Vee-validate 進行前端欄位校驗，確保使用者輸入資料格式正確，從源頭減少無效的後端請求。'
      },
      {
        type: 'subtitle',
        content: 'reCAPTCHA 設置與 API Token 控管',
      },
      {
        type: 'content',
        content: '引入 Google reCAPTCHA (grecaptcha) 挑戰機制，有效識別並阻斷機器人自動化行為，只有真實使用者能觸發 AI 生成流程，成功後會換取一組 Token，再透過 Token 進行後續的 AI 歌曲生成，確保 API 呼叫的唯一與安全性。'
      },
      {
        type: 'subtitle',
        content: '資料準確度 X 成本控制',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '透過雙重驗證機制，確保收錄用戶數據具備高品質且具備真實性，並同時有效防堵惡意成本的支出'
      },
      {
        type: 'link',
        content: '更多專案介紹',
        path: 'https://mx-digi.com/works/moon2024'
      },
    ]
  },
  {
    id: 'cp',
    title: 'CLUB Panasonic 會員俱樂部 | 會員系統 X CMS後台管理',
    description: '從 0 到 1 打造以「會員服務」為核心的品牌平台，專注於提升會員體驗（UX）與資料處理的穩定性。打造全方位的會員中心，包含：會員加入、第三方登入 / 綁定、心得投稿系統、線上報修表單、個人資料編輯等等，後台管理系統開發：針對前台客戶需求建置專屬的管理模組，像是文章上稿、心得審核、訊息通知管理等客製化功能。',
    image: club,
    date: '2023/10 ~ 進行中',
    website: [{ type: 'official', url: 'https://club.panasonic.tw' }],
    tags: ['Vue', 'Vuex', 'Vuetify', 'Vue-router', 'Webpack', 'Vite'],
    itemList: [
      {
        type: 'title',
        content: '會員系統 | 高複用性表單架構與安全驗證',
      },
      {
        type: 'content',
        content: '技術： Vue、Pug、Vee-validate、Vue-m-message、Webpack、Vue-router、Vuex',
      },
      {
        type: 'quote',
        content: '挑戰：建置品牌會員系統時，需處理多樣化的表單需求，包括登入註冊、售後報修、個人資料維護等。各表單結構差異大、驗證邏輯複雜，若逐一開發將導致程式碼雜亂且難以統一維護，同時需在高頻率的資料傳遞中確保輸入正確性與系統安全性。',
      },
      {
        type: 'subtitle',
        content: '表單組件化設計',
      },
      {
        type: 'content',
        content: '將表單元素拆解為具高度配置性的基礎組件（如 Input, Textarea, Checkbox, Radio），建立標準化 UI 規範，大幅提升跨頁面的代碼複用率。',
      },
      {
        type: 'subtitle',
        content: '嚴謹驗證機制整合',
      },
      {
        type: 'content',
        content: '導入 Vee-validate 實作動態表單驗證，針對不同業務場景配置精確的校驗規則，確保前端資料流的合規性與正確性。',
      },
      {
        type: 'subtitle',
        content: '優化使用者回饋體驗',
      },
      {
        type: 'content',
        content: '使用 vue-m-message 套件，根據 API 異步請求結果即時觸發對應的訊息提示，透過明確的視覺反饋優化使用者體驗。',
      },
      {
        type: 'subtitle',
        content: '強化資料防護安全性'
      },
      {
        type: 'content',
        content: '在敏感操作頁面實作圖形驗證碼機制，透過手動輸入校驗防止自動化腳本攻擊，保障會員資料傳遞的安全。'
      },
      {
        type: 'subtitle',
        content: '提升開發效率與維護性',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '透過組件化開發模式，雖然一開始需要花時間初始化建置，但也建立了組件的複用性與可擴充性。為後續相關表單頁面的開發時程大幅縮短<span class="text-accent"> 50% </span>，達成全站表單樣式與結構統一，並且搭配完善的驗證與即時回饋機制，除了能控管資料的處理，同時也為品牌會員打造一個美好的網站體驗。'
      },
      {
        type: 'title',
        content: '會員系統 | 導航守衛與全域狀態管理優化'
      },
      {
        type: 'quote',
        content: '挑戰：擁有大量頁面的品牌會員系統中，必須確保敏感頁面的訪問權限。如何建立一套嚴密的權限控管機制，根據會員登入狀態動態控管路由，同時需優化使用者資料的獲取流程，避免在頁面切換間重複呼叫 API，以維持系統的高效能與資料一致性。',
      },
      {
        type: 'subtitle',
        content: '實作導航守衛'
      },
      {
        type: 'content',
        content: '利用 Vue Router 的 beforeEach 鉤子，結合 LocalStorage，建立自動化的登入狀態校驗機制，確保只有授權用戶能進入特定功能頁。',
      },
      {
        type: 'subtitle',
        content: '全域狀態管理與 API 請求優化'
      },
      {
        type: 'content',
        content: '整合 Vuex 建立用戶狀態中心，將 Fetch 後的用戶資料存儲於 Store 中，實作「一次獲取、全域共用」的資料架構。同時，根據 Store 的狀態決定是否發送 API ，有效大幅減少多餘的網絡連線與後端負擔。',
      },
      {
        type: 'subtitle',
        content: '強化系統安全性 X 提升開發可維護性',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '建立前端第一道防禦線，確保會員專屬功能與敏感資料不會隨意洩漏。透過上述提及的 API 請求優化，讓系統在大量用戶同時存取下仍能維持穩定運作，通過品牌每年的壓力測試。'
      },
      {
        type: 'title',
        content: '後台系統 | 高度客製化 CMS 與模組化管理'
      },
      {
        type: 'content',
        content: '技術： Vue、Pug、Vue-m-message、Vite',
      },
      {
        type: 'quote',
        content: '挑戰：為滿足客戶多元的營運需求（如首頁輪播、活動頁面、電子票券管理、問卷系統等），需打造一套功能全面且具備高度彈性的後台系統。如何設計一套通用的「上稿與編輯邏輯」，讓非技術背景的管理者能自主建立複雜與多樣的前台內容，同時需要確保後台操作的易用性與前台呈現的一致性。',
      },
      {
        type: 'subtitle',
        content: '設計高度模組化架構 X 標準化業務邏輯開發'
      },
      {
        type: 'content',
        content: '將管理單元按照需求分類並且統一列表與編輯頁面邏輯，以利後續後台開發與操作的一致性。同時針對複用組件模組化，像是開發拖拽式區塊模組，支持圖片、標題、左右圖文等多樣元件的自由組合，或是常使用到的 Input、Textarea、Select 組件化。',
      },
      {
        type: 'subtitle',
        content: '整合進階編輯工具'
      },
      {
        type: 'content',
        content: '深度整合 Froala HTML 編輯器與檔案上傳機制，讓後台管理者能實現高度彈性化的排版需求。',
      },
      {
        type: 'subtitle',
        content: '大幅降低溝通與維護成本 X 提升後台交付速度',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '透過高度自主的 CMS 系統，客戶能自行處理多數網站內容的更新，減少了開發團隊支援的頻率。在未來的後台新單元建置，開發時程減少了約<span class="text-accent">50%</span>，展現了極高的系統擴展性。',
      }
    ]
  },
  {
    id: 'life-style',
    title: 'Panasonic 住空間美學 | 品牌網站建置 x 風格測驗',
    date: '2023/02 ~ 2025/12',
    description: '起初為松下住空間美學建置動效品牌網站，於後期的業務需求新增風格測驗單元，透過技術遷移加速開發流程，兼具使用者互動與品牌體驗。', 
    image: lifeStyle,
    tags: ['Vue', 'Pinia', 'Vite', 'Webpack', 'Stylus', 'GSAP', 'Pug'],
    website: [
      { type: 'official', url: 'https://pstw.panasonic.com.tw/housing/life-style-match/diagnose.html' },
    ],
    itemList: [
      {
        type: 'title',
        content: '品牌動效網站建置 | 2023 / 02 - 2023 / 06'
      },
      {
        type: 'quote',
        content: '挑戰：將原本靜態的品牌網站升級為具備體驗的動效網站。在品牌文案資訊量龐大的情況下，必須在「訊息傳遞清晰」與「豐富視覺動效」之間取得平衡，確保複雜的動效不會導致開發流程混亂或後期維護困難。',
      },
      {
        type: 'title',
        content: '高互動感視差滾動與動效架構開發',
      },
      {
        type: 'subtitle',
        content: '高效能動效開發與工具化',
      },
      {
        type: 'content',
        content: '運用 GSAP 製作高品質的視差滾動（Parallax）與元素交錯動畫，提升使用者瀏覽時的互動趣味性與品牌質感，並且根據整個網站的動效規劃與設計師期待，針對高頻率出現的動效封裝成可複用的 JavaScript Functions，實現「僅需加入特定 CSS Class 即可觸發動效」的方法，大幅提升開發效率與網站動效的一致性。',
      },
      {
        type: 'subtitle',
        content: '抽出資料結構維持程式可讀性',
      },
      {
        type: 'content',
        content: '針對各個頁面大量的文案與圖片，抽出資料結構並進行組織，讓程式碼更為清晰易讀，同時也方便後續的維護與更新。',
      },
      {
        type: 'subtitle',
        content: '高度可維護性 X 開發產能極大化',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '建立了一套標準化的動效規範，讓後續內容更新或功能擴充時，能以極低的開發成本快速對接。',
      },
      {
        type: 'title',
        content: '圖片資源與首屏加載效能優化',
      },
      {
        type: 'quote',
        content: '挑戰：在品牌動態官網的開發過程中，由於包含大量高解析度圖片與視覺素材，導致網頁加載體積過大（Payload size 過高），顯著影響首屏加載速度。必須在不犧牲視覺品質的前提下，針對圖片資源進行系統性的效能改造，以降低行動裝置用戶的流失率。',
      },
      {
        type: 'subtitle',
        content: '精細化資源壓縮與格式轉換',
      },
      {
        type: 'content',
        content: '重新對設計端提供的高畫質圖檔進行深度壓縮與格式轉換，在維持視覺無損的要求下，大幅削減資源體積，確保在各種網絡環境下皆能快速加載。',
      },
      {
        type: 'subtitle',
        content: '延遲載入機制與資源請求優先級優化',
      },
      {
        type: 'content',
        content: '整合 vanilla-lazyload 插件實作延遲加載，並搭配資源請求優先級配置，確保關鍵品牌視覺優先呈現，提升 FMP（首次有效繪製）的速度，避免一次性加載所有素材造成頻寬壓力。',
      },
      {
        type: 'subtitle',
        content: '大幅縮短首屏等待時間 X 優化使用者體驗',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '透過延遲載入與壓縮技術，成功減少了首屏初始請求量，有效解決弱網環境下的載入卡頓問題，並提供流暢的瀏覽體驗與降低伺服器負擔。',
      },
      {
        type: 'title',
        content: '品牌風格網站單元建置 | 2025 /04 ~ 2025 / 05',
      },
      {
        type: 'quote',
        content: '挑戰：既有的 Webpack / Pug 靜態架構下，需新增一個「風格測驗」單元，如何在不影響舊有系統的前提下，導入 Vite + Vue 3 的現代化開發架構，並解決新舊環境間資源（Header / Footer、圖片素材）的共享問題，同時需高效產出十數頁結構相近的測驗結果頁。',
      },
      {
        type: 'title',
        content: '跨架構技術遷移與開發效能優化',
      },
      {
        type: 'subtitle',
        content: '現代化架構導入與狀態管理 x 跨環境資源共享',
      },
      {
        type: 'content',
        content: '選用 Vite 與 Vue 3 建立高效開發環境，並透過 Pinia 實作全域狀態管理，精準追蹤用戶測驗進度並進行結果邏輯判定。利用 Pug Mixin 封裝通用組件，實現 Webpack 與 Vite 雙版本共用同一份 Header/Footer 代碼；並透過 Vite Alias 配置，直接引用舊有專案資源，達成圖片素材的單一來源管理。'
      },
      {
        type: 'subtitle',
        content: '實作自動化頁面渲染 (MPA)',
      },
      {
        type: 'content',
        content: '整合 ejs 與 vite-plugin-virtual-html，透過模板渲染技術，僅需維護一份 .vue 模板即可動態生成 10 幾個以上的結果頁面，大幅降低程式碼重複性。',
      },
      {
        type: 'subtitle',
        content: '數據與模板分離'
      },
      {
        type: 'content',
        content: '採用「數據驅動」的模式，將測驗資料與頁面組件徹底分離。透過集中管理資料檔，實現「改資料不改程式碼」的高可維護性架構。'
      },
      {
        type: 'subtitle',
        content: '開發效率提升 X 達成極低維護成本',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '透過模板化與自動化建構流程，將原本需手動開發的 10 餘個頁面工作量，縮減至僅需維護單一模板。採用結構清晰的資料分離設計，讓後續內容迭代無需修改核心邏輯，大幅降低了長期維護的成本。',
      },
    ],

  },
  {
    id: 'ican',
    title: 'ICAN | 品牌高動效官網建置',
    description: '打造一個動畫體驗與響應式設計有高需求的品牌官網，搭配使用 GSAP 與 Tailwind CSS，針對每個頁面設計的動效需求，提升使用者瀏覽時的互動趣味性與品牌質感。',
    image: ican,
    tags: ['Pug', 'Stylus', 'Tailwind CSS', 'GSAP', 'Vite'],
    date: '2024/02 ~ 2024/03',
    website: [{ type: 'official', url: 'https://www.ican.com.tw/' }],
    itemList: [
      {
        type: 'title',
        content: '高性能動畫系統架構',
      },
      {
        type: 'quote',
        content: '挑戰：在多頁面中實現複雜且高品質的交互效果（滾動視差、橫向滾動等）。傳統 CSS 動畫難以滿足高精度控制，且逐頁撰寫 JS 動畫將導致維護困難。目標是打造一套「配置化」系統，讓開發與維運人員無需觸動 JavaScript 即可達成複雜動效。',
      },
      {
        type: 'subtitle',
        content: '動畫庫整合與模式抽象化',
      },
      {
        type: 'content',
        content: '引入 GSAP 搭配 ScrollTrigger 建立精準的控制。歸納並封裝 4 種通用動畫模式（Fade, Scale-up, Marquee, Full-circle），將複雜參數抽離為標準化的 CSS Class 與數據屬性（data-），確保動效品質與效能。',
      },
      {
        type: 'subtitle',
        content: '實作配置化驅動與集中化管理',
      },
      {
        type: 'content',
        content: '設計 data-trigger 與 data-delay 屬性介面，實現「配置即動畫」的零代碼維運。統一管理全站動效邏輯，以利後續維運修改。',
      },
      {
        type: 'subtitle',
        content: '極致維運效率 X 品牌視覺一致',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '後續接手人員可透過修改 HTML 的標籤屬性，自定義動畫觸發，大幅縮短後續維護時間與修改動效的機率。同時確保了集團品牌在不同子頁面間的動畫與視覺一致性，建立了穩定且可持續擴充的開發標準。',
      },
      {
        type: 'title',
        content: '完整的響應式設計系統',
      },
      {
        type: 'quote',
        content: '挑戰：在 6 個斷點下（XS 至 XXL）確保 Swiper 輪播、漸層文字等複雜組件對齊，並在維持極致細節的同時，避免多餘的媒體查詢，建立統一的開發規範。',
      },
      {
        type: 'subtitle',
        content: '標準化設計系統與組件參數化',
      },
      {
        type: 'content',
        content: '將斷點、企業標色、間距預定義於 Tailwind Config 中。開發 8 種以上封裝組件，並針對動態插件實作參數化斷點配置，確保各屏幕維度下的排列與交互手感皆符合設計預期。',
      },
      {
        type: 'subtitle',
        content: '跨端視覺一致性 X 高效團隊協作',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '建構高度封裝的組件庫，確保全站組件在跨頁面下維持視覺與邏輯一致。建立穩定且可持續擴充的開發標準，大幅提升團隊協作效率與後續維護彈性。',
      },
      {
        type: 'title',
        content: '多變環境下的構建系統設計',
      },
      {
        type: 'quote',
        content: '挑戰：需頻繁發布至本地、測試站（子路徑）與正式站（根目錄）等不同環境，手動修改 Base Path 路徑極易出錯。且專案包含大量獨立頁面，若缺乏管理機制，多頁面（MPA）配置將變得分散且難以維護。',
      },
      {
        type: 'subtitle',
        content: '自動化環境配置與指令封裝',
      },
      {
        type: 'content',
        content: '於 Vite 設定檔中根據 NODE_ENV 自動注入 Base URL，實現「一套代碼，多端部署」。封裝 NPM Scripts 將複雜變數傳遞簡化為直覺指令，達成發布零出錯率。',
      },
      {
        type: 'subtitle',
        content: '優化 MPA 配置',
      },
      {
        type: 'content',
        content: '利用 vite-plugin-virtual-html 結合 EJS 模板，將路由、SEO 與配置集中化，達成「新增頁面僅需一行配置」的自動化流程，即便面對數十個獨立頁面，依然能保持結構整潔與極佳的系統擴展性。同時透過 Vite 的構建鉤子動態生成對應的 HTML 入口，確保多頁面架構在打包過程中的資源引用與路徑正確性。',
      },
      {
        type: 'subtitle',
        content: '系統擴展性與穩定性',
        class: 'text-accent'
      },
      {
        type: 'content',
        content: '透過 Vite 建構自動化解決了因環境切換導致的資源路徑錯誤問題，顯著提升了部署的穩定性，並且在未來新增其他子頁面時，能直接透過虛擬 HTML 與 EJS 模板快速完成配置，大幅提升了開發效率。'
      }
    ],
  },
  {
    id: 'solc',
    title: '天主教中華聖母基金會 | 高動效一頁式募款活動網站',
    description: '在不到一個月的短暫時程內，打造一個具備情感溫度與豐富視覺動效的募款活動網站。透過組件化開發與 GSAP 動效與設計深度協作，體現「家」的氛圍，並整合數據追蹤募款成效。',
    image: solc,
    tags: ['Pug', 'Tailwind CSS', 'GSAP', 'Vite', 'GA4'],
    date: '2025/09',
    website: [{ type: 'official', url: 'https://www.solc.org.tw/love-chiayi-donate' }],
    itemList: [
      {
        type: 'title',
        content: '情感敘事一頁式網站開發',
      },
      {
        type: 'quote',
        content: '挑戰：為協助 20 年在地非營利組織進行年度募款，需在極短時程內打造具「家」的情感溫度與豐富動效的募款活動網站。如何在確保高度情感說服力的同時，於緊湊時程內完成複雜動效開發、跨裝置測試及效能優化。',
      },
      {
        type: 'subtitle',
        content: '組件化開發與情感化動效協作',
      },
      {
        type: 'content',
        content: '選用 Vite 搭配 Pug 實作組件化模板架構，拆解為可複用組件以加速迭代。與設計師深度協作，運用 GSAP 與 Swiper 實作互動式故事卡片與視差滾動，精準還原「家」的氛圍。',
      },
      {
        type: 'subtitle',
        content: '性能優化、響應式系統與數據追蹤',
      },
      {
        type: 'content',
        content: '導入 Tailwind CSS 與 Stylus 建立輕量化樣式規範，並實作圖片 WebP 轉換與 Lazy Loading 確保極速加載。同時在關鍵節點埋設 GA4 事件，精準追蹤使用者行為軌跡，為後續內容優化提供數據支持。',
      },
      {
        type: 'subtitle',
        content: '高效率交付與品質',
      },
      {
        type: 'content',
        content: '成功於一個月內完成從開發到上線的全部流程，在桌手機裝置下保持動效的穩定性。',
        class: 'text-accent',
      }
    ]
  },
  {
    id: 'mx',
    title: 'MX | 官網改版',
    date: '2024/04 ~ 2025/11',
    description: '重構現有的官網，將作品頁面轉換具模組化的開發模式，為後續維運打造一套標準化開發流程。',
    image: mx,
    website: [{ type: 'official', url: 'https://mx-digi.com/' }],
    tags: ['Vue', 'Pug', 'Webpack'],
    itemList: [
      {
        type: 'title',
        content: '高擴展性作品集 CMS 模組化架構'
      }, 
      {
        type: 'quote',
        content: '挑戰：公司官網因長期未更新導致品牌形象落後，且缺乏統一的作品展示架構。所以如何在短時間內建立一套能相容於未來所有新專案且具備高度彈性的展示模板，讓團隊能快速且大量地產出「作品案例」，同時確保設計風格與開發邏輯的高度一致。'
      },
      {
        type: 'subtitle',
        content: '定義 CMS 模組化規範與模板'
      },
      {
        type: 'content',
        content: '與設計師協作，將作品頁面拆解為可配置的區塊（如：標題、多類型圖文組件、影片嵌段），建立類似 CMS（內容管理系統）的動態組件架構。運用 Vue.js 實作高度抽象化的組件庫，根據專案需求靈活拼裝不同功能的區塊'
      },
      {
        type: 'content',
        content: '建立一套開發者與設計師共同遵循範本，讓未來新增作品時能達成快速開發的流程。'
      },
      {
        type: 'image',
        content: '每個作品頁面保有該專案的專屬色系',
        path: mxDesign
      },
      {
        type: 'subtitle',
        content: '開發產能大幅提升 X 品牌形象升級與維護',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '透過組件化模板，將單一作品頁面的開發時程縮短至僅需原本的 1/3，達成快速累積作品量的商業目標。透過標準化流程降低後續維護的成本。'
      }
    ],
  },
  {
    id: 'my-record',
    title: 'Side Project 儲蓄管理',
    date: '2025/11',
    description: '使用 React、Typescript、MUI開發，在日常生活中有時候都需要記帳。',
    image: '',
    tags: ['React', 'Typescript', 'MUI'],
    itemList: [

    ],
  }
];
