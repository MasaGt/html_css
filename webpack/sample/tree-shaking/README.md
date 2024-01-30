### tree-shakingで不要なコードの除去を行うサンプル

- Math.randomのようなwebpackが副作用の有無を判断できないコードの除去に以下のプラグインを使った
    - terser-webpack-plugin