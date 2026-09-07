# VocabCache

VocabCache 是一個免費、離線可用的英文生字學習工具，以單頁 Web App 形式提供 DSE 英文單字管理、閃卡複習、測驗、造句練習，以及本機 AI 文法回饋。

## Features

### 英文生字管理
- 新增、編輯、刪除英文單字
- 支援音標、詞性、中文釋義、例句與筆記
- 依分類、難度與學習狀態篩選單字
- 內建搜尋與分類管理

### 閃卡複習
- 以閃卡模式複習英文單字與釋義
- 支援隨機出題與分類篩選

### 測驗模式
- 提供英文測驗，支援選擇題練習
- 可調整每次測驗題數與範圍

### 造句練習與 AI 文法回饋
- 打字練習以目標單字造出完整英文句子
- 先進行規則式語法檢查
- 啟用本機 AI 後，可進一步取得英文語法、用字與實用建議

### SRS 間隔重複
- 依學習狀況自動調整下次複習時間
- 閃卡與造句結果都會影響 SRS 排程

### 匯入與匯出
- 匯出：JSON、CSV、Anki
- 匯入：JSON、CSV
- CSV 匯入支援自有欄位格式與重複單字過濾

### PWA 與離線使用
- 可當作 PWA 安裝到手機或電腦
- 資料保存在瀏覽器本地儲存空間
- 離線也能繼續學習

### 本機 AI
- 使用 MediaPipe Tasks GenAI 與 Gemma 4 E2B
- 透過 WebGPU 在瀏覽器本地執行
- 模型下載後會快取在瀏覽器中

## Getting Started

VocabCache 是單檔案 Web App，主要功能集中在 `index.html`。

### Run locally

直接用瀏覽器開啟：

```bash
# 使用任意本地伺服器，例如
python -m http.server 8000
```

然後開啟：

```
http://localhost:8000/index.html
```

或直接以檔案方式開啟 `index.html`，但部分本機 AI 與 PWA 功能可能建議透過本地伺服器測試。

### Install as PWA

在支援的瀏覽器中，將網站新增至主畫面即可當作 PWA 使用。

## Project Structure

```text
vocabmaster/
  index.html
  logo.jpeg
  google4d83934a99618a06.html
  apk/
    android/
    app-debug.apk
```

目前主要程式碼與樣式都集中在 `index.html`。

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- localStorage
- MediaPipe Tasks GenAI
- Gemma 4 E2B
- WebGPU

## Notes

- 本專案目前為單頁應用，尚未拆分多檔案架構。
- 若未來提供正式網址，可再補充 sitemap、canonical 與 robots.txt。
- APK 目錄下的 `android/app/src/main/assets/public/index.html` 為網站的 APK 版本副本。

## License

未指定授權條款。若日後需要，可再補充 LICENSE。
