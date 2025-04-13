import{_ as s,o as n,c as a,e}from"./app-a93bcaa0.js";const t={},i=e(`<h1 id="检查昵称是否可注册" tabindex="-1"><a class="header-anchor" href="#检查昵称是否可注册" aria-hidden="true">#</a> 检查昵称是否可注册</h1><h2 id="检查昵称-已失效" tabindex="-1"><a class="header-anchor" href="#检查昵称-已失效" aria-hidden="true">#</a> <s>检查昵称（已失效）</s></h2><details><summary>查看折叠内容</summary><blockquote><p>https://passport.bilibili.com/web/generic/check/nickname</p></blockquote><p><em>请求方式:GET</em></p><p>也可用于判断指定昵称的用户是否存在</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>nickName</td><td>str</td><td>目标昵称</td><td>必要</td><td>最长为16字符</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>状态码</td><td>-400：请求错误<br>-500：服务器端异常<br><strong>详细说明见下一表格</strong></td></tr><tr><td>message</td><td>str</td><td>错误详情</td><td>若昵称可用，则不返回message</td></tr></tbody></table><p><code>code</code>状态码：</p><table><thead><tr><th>值</th><th>含义</th></tr></thead><tbody><tr><td>0</td><td>昵称未被注册</td></tr><tr><td>2001</td><td>该昵称已被他人使用</td></tr><tr><td>40002</td><td>昵称包含敏感信息</td></tr><tr><td>40004</td><td>昵称不可包含除-和_以外的特殊字符</td></tr><tr><td>40005</td><td>昵称过长（超过16字符）</td></tr><tr><td>40006</td><td>昵称过短（少于2字符）</td></tr><tr><td>40014</td><td>昵称已存在</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询昵称 <code>xijinping</code> 是否被使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://passport.bilibili.com/web/generic/check/nickname&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;nickName=xijinping&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">40002</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;昵称包含敏感信息&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>查询昵称 <code>//</code> 是否被使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://passport.bilibili.com/web/generic/check/nickname&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;nickName=//&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">40004</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;昵称不可包含除-和_以外的特殊字符&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>查询昵称 <code>test0000000000000 </code> 是否被使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://passport.bilibili.com/web/generic/check/nickname&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;nickName=test0000000000000 &#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">40005</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;昵称过长&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>查询昵称 <code>0</code> 是否被使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://passport.bilibili.com/web/generic/check/nickname&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;nickName=0&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">40006</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;昵称过短&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>查询昵称 <code>test</code> 是否被使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://passport.bilibili.com/web/generic/check/nickname&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;nickName=test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">40014</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;昵称已存在&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></details><p>目前该接口无论参数，稳定返回：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[i];function o(c,p){return n(),a("div",null,d)}const r=s(t,[["render",o],["__file","check_nickname.html.vue"]]);export{r as default};
