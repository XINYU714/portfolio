// import joinToEnjoyCover from '@/assets/img/project/join-to-enjoy-cover.jpg'

export const TAG_LIST: { title: string; color: string }[] = [
  { title: 'Vue', color: 'primary' },
  { title: 'React', color: 'secondary' },
  { title: 'TypeScript', color: 'accent' },
  { title: 'Pinia', color: 'primary' },
  { title: 'Vuex', color: 'secondary' },
  { title: 'Vuetify', color: 'accent' },
]

// 工作經驗詳細描述
export const EXPERIENCE_MAP = new Map([
  ['MX', {
    summary: '主導多項網站開發與維運，包含<b>品牌官網、後台系統、動效網頁</b>，致力於建構<span class="text-accent font-bold">高性能、模組化</span>的 Web 解決方案。',
    sections: [
      {
        title: '系統架構優化與技術迭代',
        items: [
          {
            title: '跨版本核心遷移 (Vue 2 → Vue 3)',
            content: '主導公司後台公版升級至 Vue 3 / Vite 6 / Vuetify 3 架構。針對全局 Breaking Changes 進行重構（如 v-model 雙向綁定邏輯、Router 導航守衛），並大幅提升開發建置速度。'
          },
          {
            title: 'CSS 架構演進與規範建立',
            content: '推動 Tailwind CSS 導入，透過 Utility-first 開發模式建立 UI 標準化規範，成功縮減全站 CSS 體積並極大化元件重用率。'
          },
          {
            title: '資安防護與滲透修復',
            content: '協同修復壓力測試漏洞，執行 Bootstrap 5 安全性遷移，並與後端制定 API 加密傳輸規範，落實資安完整性驗證。'
          }
        ]
      },
      {
        title: '核心後台與商務邏輯開發',
        items: [
          {
            title: 'B2B 員工身心管理平台',
            content: '負責高安全性系統開發，實作 RBAC (角色權限控管) 與動態路由。整合問卷題型管理、解測日程預約系統，並將原始數據轉化為直觀的統計視覺化圖表。'
          },
          {
            title: '高彈性 CMS 內容管理架構平台',
            content: '設計多樣化 CMS 組件（影片、圖文、動態連結等），提供需求端高度自定義的內容產製能力。'
          }
        ]
      },
      {
        title: '品牌官網與會員系統整合',
        items: [
          {
            title: '全功能會員中心實作',
            content: '整合第三方登入、會員中心各項功能，運用 Vuex 管理會員資料與狀態與Vue Router 導航守衛，確保跨頁面資料狀態的精準同步與路由權限控管。'
          },
          {
            title: '互動風格測驗 (模組化設計)',
            content: '將原本的專案延伸新以 Vue3 + Vite 的架構，運用 Pinia 管理答題邏輯，並透過動態網址判別技術，達成單一架構自動渲染多樣化結果頁面，大幅降低原本使用 Pug + Webpack 的開發速度。'
          },
          {
            title: 'Web Accessibility (無障礙開發)',
            content: '遵循 WCAG 2.1 規範，優化語義化標籤與鍵盤交互流程，確保公部門專案符合無障礙指標。'
          }
        ]
      }
    ]
  }],
  ['GoFreight', {
    summary: '負責公司官網與行銷活動頁面開發與維護，並提升網站效能與佈局 SEO 關鍵字，以提升網站流量。',
    sections: [
      {
        title: 'Wordpress 官網與行銷活動頁面開發',
        items: [
          {
            title: '官網/行銷活動頁面開發與追蹤部署',
            content: '運用 HTML 、 CSS 、JavaScript 製作 RWD 響應式網頁，設定 GTM 、 GA 代碼等追蹤，並結合 Looker Studio 提供數據圖表。'
          },
          {
            title: 'SEO 關鍵字佈局與效能提升',
            content: '網頁效能分數從<span class="text-accent font-bold"> 15 分提升至 70 分</span>，並透過關鍵字佈局提升網站流量。 2022 年網站整體流量提升<span class="text-accent font-bold"> 20%</span>。'
          }
        ]
      }
    ]
  }]
]);

// 專案描述
// type: title, content, image, link, subtitle, quote
export const PROJECT_LIST = [
  {
    id: 1,
    title: '優勢韌力探索平台 | 從 0 到 1 建置 B2B 平台',
    description: '透過專業量表來自我探索的平台，整合「優勢韌力測驗」、「預約排程」、「數據報表」等功能，一站式平台解決原本人工填寫、排程、報表分散不同地方的痛點。',
    image: '/assets/projects/img/join-to-enjoy-cover.jpg',
    path: 'project/1',
    tags: ['Vue', 'Vuetify', 'Chart.js', 'Pinia'],
    date: '2024/11 ~ 進行中',
    itemList: [
      {
        type: 'title',
        content: '高效能動態圖表模組開發',
      },
      {
        type: 'quote',
        content: '挑戰：該專案需呈現多維度數據（如圓餅圖、條狀圖、雷達圖），若一次性載入大量 Chart.js 函式庫與圖表組件，將導致首屏載入過慢，且前後台重複開發相同圖表亦會增加維護成本與代碼冗餘。'
      },
      {
        type: 'subtitle',
        content: '效能優化與按需載入',
      },
      {
        type: 'content',
        content: '實施代碼分割（Code Splitting）策略，僅在使用者切換至特定頁面時才加載對應圖表，減少初始加載體積。',
      },
      {
        type: 'subtitle',
        content: '組件化架構設計'
      },
      {
        type: 'content',
        content: '將圖表邏輯封裝為高可複用性的通用組件，與後端討論資料格式，實現前後台系統間的代碼共享。',
      },
      {
        type: 'subtitle',
        content: '動態交互實現'
      },
      {
        type: 'content',
        content: '結合 IntersectionObserver API 與 Chart.js 實作「視口觸發動畫」，確保圖表僅在進入使用者視野時才執行繪製動畫。',
      },
      {
        type: 'subtitle',
        content: '「增強視覺互動體驗 X 優化開發效率」',
        class: 'text-accent',
      },
      {
        type: 'content',
        content: '在兼顧數據圖表閱讀的趣味性透過按需載入有效降低首屏資源請求量，顯著提升網頁渲染效能與使用者體驗，並且透過組件化設技能減少一半重複開發時間，大幅提高後期維護的一致性。'
      },
      {
        type: 'title',
        content: 'Icon 模組優化',
      },
      {
        type: 'quote',
        content: '挑戰：原專案採用 Vuetify 預設的 Icon Fonts 載入方式，雖便於開發，但會導致瀏覽器在初始階段載入完整的 Material Design Icons 字體包。這種「全量載入」的模式造成了不必要的網路頻寬浪費，成為首屏載入效能的瓶頸，影響了 LCP（最大內容繪製）等關鍵性能指標。'
      },
      {
        type: 'subtitle',
        content: '技術方案轉型與集中管理',
      },
      {
        type: 'content',
        content: '廢除傳統全量 Font 引入，改採 @mdi/js 的 SVG 常量載入方案，建立專門的 icon.js 管理模組，採取「集中宣告、統一導出」的架構，確保專案中使用的所有圖標皆有跡可循。'
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
        content: '在程式方面，透過集中化的管理模式，讓圖標的重用與更換更加透明化，避免了程式碼中出現冗餘或重複定義的情況。而在網頁效能方面，成功將圖標相關的初始載入資源體積降低 50% 以上，顯著提升了網站的加載速度。'
      },
      {
        type: 'title',
        content: '問卷管理系統與數據整合',
      },
      {
        type: 'quote',
        content: '挑戰：將原本分散於外部系統的問卷功能整合至自有平台，以實現數據一站式管理。挑戰在於需要建立一個靈活的後台系統，支持多樣化的題型（單選、多選、量表、簡答），並在確保操作流暢性的同時，處理複雜的 CRUD（增刪改查）邏輯與填答數據的可視化。'
      },
      {
        type: 'subtitle',
        content: '靈活題型架構設計 & 交互體驗優化',
      },
      {
        type: 'content',
        content: '設計具擴展性的數據結構，統一管理單選、多選、程度題及簡答題等多種題型，並實現後台自定義配置功能。同時，搭配 vuedraggable 實作拖拽式介面，讓管理者能直覺地調整題目順序，大幅提升後台操作的流暢度與效率。'
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
        content: '成功將第三方問卷需求移轉至自有平台，達成 All-in-one 的整合目標，降低了組織的跨系統管理成本，並且解決業務需求，透過拖拽式 UI 設計，顯著優化了問卷製作的流程，獲得後台管理使用者的高度滿意。',
      },
    ]
  },
  {
    id: 2,
    title: '優勢韌力探索平台 | 從 0 到 1 建置 B2B 平台',
    description: '透過專業量表來自我探索的平台，整合「優勢韌力測驗」、「預約排程」、「數據報表」等功能，一站式平台解決原本人工填寫、排程、報表分散不同地方的痛點。',
    image: 'https://images.unsplash.com/photo-1506744038136-479a7d45f98a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    path: 'project/2',
    tags: ['Vue', 'Vuetify', 'Chart.js', 'Pinia'],
    date: '2024/11 ~ 進行中',
    itemList: [
      {
        type: 'title',
        content: '我是假資料title',
      },
      {
        type: 'content',
        content: '232323',
      }
    ]
  },
];