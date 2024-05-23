/* Copyright 2016 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* globals module, __non_webpack_require__ */

"use strict";

const {addScriptSync,addECMAScript,addECMAScriptSync,addECMAScriptLink} = require('../../protyle/util/addScript')
const {Constants} = require('../../constants')
// // addScriptSync(`${Constants.PROTYLE_CDN}/js/pdf/pdf.js?v=3.5.141`, 'pdfjsScript')
// addECMAScript(`${Constants.PROTYLE_CDN}/js/pdf/pdf.mjs`, 'pdfjsScriptECMA')
// // console.log("nosync")
// addECMAScriptSync(`${Constants.PROTYLE_CDN}/js/pdf/pdf.mjs`, 'pdfjsScriptECMASync')
// // console.log("sync")
// addECMAScriptLink(`${Constants.PROTYLE_CDN}/js/pdf/pdf.mjs`, 'pdfjsScriptECMALink')
// console.log('link')
// // module.exports = window['pdfjsLib'];
let pdfjsLib = {};
import(`/stage/protyle/js/pdf/pdf.mjs`).then(pdfjsLibImport=>{
    for (const key in pdfjsLibImport){
        pdfjsLib[key] = pdfjsLibImport[key]
    }
})
pdfjsLib['createPromiseCapability']= function createPromiseCapability(){
    return Promise.withResolvers()
}
module.exports = pdfjsLib