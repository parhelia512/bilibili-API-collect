import{_ as s}from"./battery-100-5a4d9900.js";import{_ as t,o as n,c as a,e}from"./app-a93bcaa0.js";const p={},o=e('<h1 id="微信-支付宝方式充电" tabindex="-1"><a class="header-anchor" href="#微信-支付宝方式充电" aria-hidden="true">#</a> 微信&amp;支付宝方式充电</h1><img src="'+s+`" width="100" height="100"><p>操作流程：</p><ol><li>申请充电二维码及扫码秘钥，秘钥临时保存备用</li><li>使用<code>qr_code_url</code>中的值生成二维码</li><li>用支付宝或微信扫描</li><li>以扫码秘钥作为参数轮询检查扫码支付结果</li></ol><h2 id="申请充电二维码及扫码秘钥" tabindex="-1"><a class="header-anchor" href="#申请充电二维码及扫码秘钥" aria-hidden="true">#</a> 申请充电二维码及扫码秘钥</h2><blockquote><p>https://api.bilibili.com/x/ugcpay/web/v2/trade/elec/pay/qr_code/create</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p>秘钥有效时间为10分钟</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>bp_num</td><td>num</td><td>充电B币数量</td><td>必要</td><td>必须在2-9999之间</td></tr><tr><td>up_mid</td><td>num</td><td>充电对象用户mid</td><td>必要</td><td></td></tr><tr><td>is_bp_remains_prior</td><td>bool</td><td>是否优先扣除B币</td><td>必要</td><td>true：是<br>false：否<br>在B币不足时剩余的部分利用支付平台支付</td></tr><tr><td>otype</td><td>str</td><td>充电来源</td><td>必要</td><td>up：空间充电<br>archive：视频充电</td></tr><tr><td>oid</td><td>num</td><td>充电来源代码</td><td>必要</td><td>空间充电：充电对象用户mid<br>视频充电：稿件avid</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误<br>-500：服务器错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>qr_code_url</td><td>str</td><td>支付二维码生成内容</td><td>存在转义</td></tr><tr><td>qr_token</td><td>str</td><td>扫码秘钥</td><td></td></tr><tr><td>exp</td><td>num</td><td>获得经验数</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>申请空间的方式向用户23215368充电10电池且不使用B币的支付二维码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/ugcpay/trade/elec/pay/qr_code/create&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;elec_num=10&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;up_mid=23215368&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;is_bp_remains_prior=false&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;otype=up&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;oid=23215368&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;qr_code_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://api.bilibili.com/x/ugcpay/trade/elec/pay/qr_code/gateway?mid=293793435&amp;token=c1cb1d95d2194ba58df6bb0f24ae1aaa&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;qr_token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c1cb1d95d2194ba58df6bb0f24ae1aaa&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;exp&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="检查扫码支付结果" tabindex="-1"><a class="header-anchor" href="#检查扫码支付结果" aria-hidden="true">#</a> 检查扫码支付结果</h2><blockquote><p>https://api.bilibili.com/x/ugcpay/trade/elec/pay/order/status</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>qr_token</td><td>str</td><td>扫码秘钥</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>qr_token</td><td>str</td><td>扫码秘钥</td><td></td></tr><tr><td>order_no</td><td>str</td><td>留言token</td><td>未成功则无此项<br>用于添加充电留言</td></tr><tr><td>mid</td><td>num</td><td>当前用户mid</td><td></td></tr><tr><td>status</td><td>num</td><td>状态值</td><td>若秘钥错误则无此项<br>1：已支付<br>2：未扫描<br>3：未确认</td></tr></tbody></table><p><strong>示例：</strong></p><p>当申请到的支付二维码未被扫描时，<code>data</code>.<code>ststus</code>的值为<code>2</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/ugcpay/trade/elec/pay/order/status&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;qr_token=c7cbdc47fc424cd18f2146db653597b8&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;qr_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;c7cbdc47fc424cd18f2146db653597b8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span><span class="token number">293793435</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span><span class="token number">2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>当申请到的支付二维码已扫描但未确认时，<code>data</code>.<code>ststus</code>的值为<code>3</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/ugcpay/trade/elec/pay/order/status&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;qr_token=c7cbdc47fc424cd18f2146db653597b8&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;qr_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;c7cbdc47fc424cd18f2146db653597b8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span><span class="token number">293793435</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span><span class="token number">3</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>成功支付后，<code>data</code>.<code>ststus</code>的值为<code>1</code>，且<code>data</code>.<code>order_no</code>存在留言token</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/ugcpay/trade/elec/pay/order/status&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;qr_token=c7cbdc47fc424cd18f2146db653597b8&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;qr_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;bd649c836c524550bfe22a369334fc05&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order_no&quot;</span><span class="token operator">:</span><span class="token string">&quot;BPTD36U3KP82I31RSSLG&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span><span class="token number">293793435</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,41),d=[o];function r(c,l){return n(),a("div",null,d)}const b=t(p,[["render",r],["__file","WeChat_Alipay.html.vue"]]);export{b as default};
