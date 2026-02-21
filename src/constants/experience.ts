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
