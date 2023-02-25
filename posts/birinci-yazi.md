---
title: "Vuex'de getters, mutations, actions kullanımı"
date: '2019-08-17'
category: 'vuejs'
description: 'Vuex nasıl kullanılır? Nelere dikkat edilmesi gerekir?'
author: 'Kutluhan'
tags:
  - 'a'
  - 'b'
 
---

## Vuex Nedir?
Vue için state management sistemidir.

## Kurulum
### Yarn
```console
yarn add vuex
```
### Npm
```console
npm i vuex
```

Kurduktan sonra `store` diye bir klasör oluşturup içine `store.js` diye bir dosya oluşturuyoruz.

Daha detaylı bilgi için [dökümantasyonundan](https://vuex.vuejs.org/) bakabilirsiniz.

## Vuex store'unun yapısı
* **State**
  * Her türden veriyi tutabilen bir objedir.
* **Getters**
* **Mutations**
* **Actions**

```html
<Link href="/ikinci-yazi">
  Hey
</Link>
```

```jsx
import { format, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

export default function Date({ dateString }) {
  const date = parseISO(dateString)

  return (
    <time dateTime={dateString}>{format(date, 'LLLL d, yyyy', {locale: tr})}</time>
  )
}
```