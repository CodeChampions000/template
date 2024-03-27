## Initial

```
    npm run install
    npm run dev
```

## Folder Structure

### Pages

Всяка страница ще се намира в **src/pages**

### Blocks

Всяка секция се разделя в "block" файлове. Block директорията се намира в **src/blocks**. Блоковете се импротват в страниците

### Components

Ако има елементи от дизайна които се повтарят на няколко страници/секции е хубаво да се създадат като компонент който може би приема различна информация чрез **props**. Директорията им се намира в **src/components**

### Layouts

Когато се повтаря дадена структура на няколко страници примерно:
```
<Header/>
страница тука a.k.a <slot/>
<Footer/>
```

**<slot/> е всичко което слагаме между Header и Footer**

Самия layout файл представлява това:
```
<!doctype html>
<html lang="en">
	<head>
        ...
	</head>
	<body>
	    Тука импортваме header
		<slot />
		Тука импортваме footer
	</body>
</html>
```

И този layout се импортва в страниците така:

```
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Welcome to Astro.">
	<main>
		блокове тука
	</main>
</Layout>
```

### Styling

Главната им директория е в **src/styles**

Всяка поддиректория си има по един главен файл **_0.scss**, в който се импортва всичко от дадената поддиректория. След което всеки главен файл се импортва в **globals.scss**

В **main** ще слагаме различните секции и блокове: **"_header.scss, _footer.scss"** и т.н.
В **base** се намират global и reusable конфигурации като **променливи**, **текст** и т.н.
В **animations** ще слагаме класове и миксини за анимации и keyframes.

Променливите могат да се изполват навсякъде в проекта.

Ще се използва **rem** вместо **px**, конфигурирал съм **10px** да са равни на **1rem**
Примерно: **1px = 0.1rem, 10px = 1rem, 100px = 10rem**

## How to import

```
---
import Layout from '../layouts/Layout.astro';
import Card from "../components/Card.astro"
---

<Layout title="Welcome to Astro.">
	<main>
		<Card/>
	</main>
</Layout>

```

