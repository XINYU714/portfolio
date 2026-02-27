---
description: 從 Notion 自動同步專案內容（含圖片下載、樣式轉換與程式碼更新）
---

### 自動化規則
當收到此指令時，請按照以下步驟執行：

#### 1. 取得 Notion Metadata (頁面屬性)
從 Notion 的頁面屬性 (Properties) 中提取以下資訊：
- **`title`**: 頁面主標題。
- **`id`**: 從 `ID` 或 `Slug` 屬性取得（若無則從標題轉換）。
- **`description`**: 從描述屬性取得。
- **`tags`**: 從標籤 "相關技能" 取得。
- **`date`**: 從"時間"取得。
- **`image` (封面)**: 從頁面封面圖 (Cover) 或第一個圖片屬性取得，並下載存放到 `src/assets/img/projects/`。

#### 2. 取得頁面內容 (itemList)
- 深度解析頁面正文中的每一個 Block。

#### 3. 解析與樣式轉換 (Rich Text Parsing)
- **文字處理**: 
  - `bold: true` -> 包裹 `<b>`
  - `color != "default"` -> 包裹 `<span class="text-accent">`
  - 將解析後的 HTML 字串放入 `content` 屬性。
- **類型判斷**: 
  - 標題 1/2 -> `title`
  - 標題 3 -> `subtitle`
  - 引用區塊 -> `quote`
  - 一般文字 -> `content`
  - 列表文字 -> 包裹成 `content`

#### 4. 圖片自動化 (Image Sync)
- 偵測到內文圖片時：
  - 下載並存放在: `/src/assets/img/projects/{id}-{index}.{ext}`。
  - **更新 projectImages.ts**: 自動新增 `import` 和註冊變數。
  - **引用**: 在 JSON 中對應 `path: PROJECT_IMAGES.{camelCaseName}`。

#### 5. 更新程式碼
- **主檔案**: `src/constants/project.ts`
- 同步更新 metadata 與 `itemList`。


## 使用方式
`/notion-paste {Notion 頁面標題} {專案ID}`

## 任務
請讀取 Notion 的「{Notion 頁面標題}」，依照上述規則自動處理所有圖片與文字樣式，並更新至專案代碼中。