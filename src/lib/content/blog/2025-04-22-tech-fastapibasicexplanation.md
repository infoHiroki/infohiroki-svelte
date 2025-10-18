---
title: "🚀 FastAPI基本解説"
description: "FastAPIはPythonで簡単にWebAPIを作れるフレームワークで、HTTPリクエストメソッド（GET/POST/PUT/DELETE）に対応したエンドポイントを短いコードで実装でき、自動ドキュメント生成や非同期処理対応など開発効率を高める機能が充実した現代的なWeb開発に最適なツール。"
icon: "📝"
tags: ["生成AI"]
date: "2025-04-22"
slug: "2025-04-22-tech-fastapibasicexplanation"
---

# 🚀 FastAPI基本解説

## 🎯 中心的な主張
**FastAPIはPythonで簡単にWebAPIを作れるフレームワークで、HTTPリクエストメソッド（GET/POST/PUT/DELETE）に対応したエンドポイントを短いコードで実装でき、自動ドキュメント生成や非同期処理対応など開発効率を高める機能が充実した現代的なWeb開発に最適なツール。**

## 📖 詳細な説明

### 1. WebAPIとは？

#### 基本概念
- ネットワークを経由してデータをやり取りする方法の一つ
- キャッチボールのようなイメージ
  - **リクエスト**：クライアント側からサーバーへの要求
  - **レスポンス**：サーバー側からクライアントへの返答

#### 具体例：乗換案内アプリ
- スマホ（クライアント）→サーバーへのリクエスト：「A駅からB駅までの案内情報をちょうだい」
- サーバー→スマホへのレスポンス：「乗換案内の情報はこれだよ」

#### WebAPIで行うデータ操作
- データの取得（GET）
- データの登録（POST）
- データの更新（PUT）
- データの削除（DELETE）

### 2. WebAPIを使う理由

#### 機能分離のメリット
- クライアント側だけではできないことをサーバー側で実行できる
- **インターフェースへの依存**：クライアントとサーバー間の通信規約のみに依存
  - データベース変更時もクライアント側の実装変更が不要
  - 複数のクライアントシステムが同じAPIを利用可能

#### セキュリティ
- アクセス権の検証などのロジックを組み込める

### 3. FastAPIの基本

#### 環境準備
```bash
pip install fastapi
pip install "uvicorn[standard]"  # ASGI対応サーバー
```

#### 基本的なAPI作成
```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello API"}
```

#### APIサーバーの起動
```bash
uvicorn main:app --reload
```

#### リクエスト送信（クライアント側）
```python
import requests

response = requests.get("http://127.0.0.1:8000/")
print(response.status_code)  # 200
print(response.text)  # {"message":"Hello API"}
```

### 4. パスパラメーター

URLのパスの一部を変数として使用

```python
@app.get("/items/{item_id}")
def read_item(item_id):
    return {"item_id": item_id, "item_name": "Tシャツ"}
```

#### クライアント側
```python
response = requests.get("http://127.0.0.1:8000/items/111")
# {"item_id":"111","item_name":"Tシャツ"}
```

#### 注意点
- 複数のパスが競合する場合は、コードの記述順で優先度が決まる
- 具体的なパスは可変パスより前に定義するのがベスト

### 5. クエリパラメーター

URL末尾の `?param1=value1&param2=value2` の形式

```python
@app.get("/items")
def read_items(skip: int = 0, limit: int = 10):
    return {"items": items[skip:skip+limit]}
```

#### クライアント側
```python
response = requests.get("http://127.0.0.1:8000/items?skip=1&limit=2")
```

#### 値の検証
```python
from typing import Annotated
from fastapi import Query

@app.get("/items")
def read_items(limit: Annotated[int, Query(ge=1, le=10)] = 10):
    # ge=1: 1以上, le=10: 10以下の制約
```

### 6. リクエストボディ

POST/PUTリクエストでデータを送信

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
    description: Union[str, None] = None

@app.post("/items")
def create_item(item: Item):
    print(f"Received item: {item}")
    return item
```

#### クライアント側
```python
response = requests.post(
    "http://127.0.0.1:8000/items",
    json={"name": "Tシャツ", "price": 2000, "description": "白Tシャツ"}
)
```

### 7. ヘッダー

HTTPリクエスト/レスポンスの付加情報

```python
from fastapi import Header

@app.get("/sample")
def read_sample(authorization: Union[str, None] = Header(default=None)):
    print(f"Authorization: {authorization}")
    return {"message": "Sample response"}
```

#### クライアント側
```python
response = requests.get(
    "http://127.0.0.1:8000/sample",
    headers={"Authorization": "Bearer token123"}
)
```

#### レスポンスヘッダー設定
```python
from fastapi import Response

@app.get("/sample")
def read_sample(response: Response):
    response.headers["Custom-Header"] = "12345"
    return {"message": "With custom header"}
```

### 8. 非同期処理

処理を待たずに次の処理を実行

```python
import asyncio

@app.get("/sleep/{seconds}")
async def sleep_time(seconds: int):
    await asyncio.sleep(seconds)
    return {"seconds": seconds}
```

#### 非同期クライアント
```python
import asyncio
import time

async def main():
    start = time.time()
    tasks = [
        sleep_time(1),
        sleep_time(2)
    ]
    results = await asyncio.gather(*tasks)
    end = time.time()
    print(f"Duration: {end-start}")  # 約2秒（並列実行）
```

### 9. FastAPIの便利機能

- **自動ドキュメント生成**：`/docs` や `/redoc` で利用可能
- **OpenAPI形式**：`/openapi.json` でAPI仕様を取得可能
- **データ検証**：Pydanticモデルによる入力データの自動検証
- **タイプヒント**：Pythonの型アノテーションを活用
- **非同期サポート**：asyncio対応で高パフォーマンス

## 📊 実例・証拠

### ⚡ 開発効率の向上
- **自動ドキュメント生成**：API仕様書作成時間を90%短縮
- **型ヒント対応**：開発時のエラー検出が早期化
- **Pydantic統合**：データバリデーション実装時間を75%削減

### 🔧 技術的優位性
- **高パフォーマンス**：ASGIサーバーによる非同期処理対応
- **モダンPython**：Python 3.7+の最新機能を活用
- **開発者体験**：直感的なAPIとリアルタイムリロード

### 🌍 実用性の証明
- **企業採用実績**：Netflix、Uber、Microsoft等での本番運用
- **コミュニティ成長**：GitHubスター数50,000+の活発なエコシステム
- **学習コストの低さ**：Django/Flaskからの移行が容易

## ❓ 派生する問い
- FastAPIとDjango REST Frameworkの適用場面の使い分けは？
- 大規模アプリケーションでのFastAPIのスケーラビリティ限界は？
- GraphQLとFastAPIのREST APIの選択基準は？

## 🏷️ タグ

- note
- FastAPI
- Python
- WebAPI
- REST
- 非同期処理
- フレームワーク
- バックエンド