# 第7章 导行电磁波

### 7.1 导行波基本概念

导行电磁波是沿传输结构定向传播的电磁波。常用导波系统：

| 类型 | 结构 | 工作模式 | 频段 |
|------|------|---------|------|
| TEM传输线 | 同轴线、双导线 | TEM | DC~微波 |
| 金属波导 | 矩形/圆形波导 | TE/TM | 微波 |
| 介质波导 | 光纤 | 混合模 | 红外/可见光 |
| 平面传输线 | 微带线、带状线 | 准TEM | 微波/毫米波 |

**纵向场法：**

将场分解为横向和纵向分量，从麦克斯韦方程组导出横向场与纵向场的关系：

$$\mathbf{E}_t = -\frac{1}{k_c^2}\left(\gamma\nabla_t E_z + j\omega\mu\,\hat{\mathbf{z}} \times \nabla_t H_z\right)$$

$$\mathbf{H}_t = -\frac{1}{k_c^2}\left(\gamma\nabla_t H_z - j\omega\varepsilon\,\hat{\mathbf{z}} \times \nabla_t E_z\right)$$

$k_c^2 = \gamma^2 + k^2$ 为截止波数。

**模式分类：**
- TEM：$E_z = H_z = 0$（需两个以上导体）
- TE（H模）：$E_z = 0, H_z \neq 0$
- TM（E模）：$H_z = 0, E_z \neq 0$

**传播常数：** $\gamma = \sqrt{k_c^2 - \omega^2\mu\varepsilon}$

- $f > f_c$（$k > k_c$）：$\gamma = j\beta$，传播
- $f < f_c$：$\gamma = \alpha$，截止衰减

截止频率 $f_c = k_c/(2\pi\sqrt{\mu\varepsilon})$

导波波长：$\lambda_g = \frac{2\pi}{\beta} = \frac{\lambda}{\sqrt{1 - (f_c/f)^2}} > \lambda$

### 7.2 矩形波导

矩形波导宽边 $a$，窄边 $b$（$a > b$）。

**TE$_{mn}$ 模：** $E_z = 0$

$$H_z = H_0\cos\left(\frac{m\pi x}{a}\right)\cos\left(\frac{n\pi y}{b}\right)e^{-j\beta z}$$

$$k_c = \sqrt{\left(\frac{m\pi}{a}\right)^2 + \left(\frac{n\pi}{b}\right)^2}$$

**TM$_{mn}$ 模：** $H_z = 0$

$$E_z = E_0\sin\left(\frac{m\pi x}{a}\right)\sin\left(\frac{n\pi y}{b}\right)e^{-j\beta z}$$

**主模 TE$_{10}$（$m=1, n=0$）：**

- 截止波数 $k_c = \pi/a$
- 截止波长 $\lambda_c = 2a$
- 截止频率 $f_c = 1/(2a\sqrt{\mu\varepsilon})$

单模传输条件：$a < \lambda < 2a$

**TE$_{10}$ 场分布：**

$$E_y = -\frac{j\omega\mu a}{\pi}H_0\sin\left(\frac{\pi x}{a}\right)e^{-j\beta z}$$

$$H_x = \frac{j\beta a}{\pi}H_0\sin\left(\frac{\pi x}{a}\right)e^{-j\beta z}$$

$$H_z = H_0\cos\left(\frac{\pi x}{a}\right)e^{-j\beta z}$$

宽壁中央 $x = a/2$ 处 $E_y$ 最大，窄壁 $x = 0, a$ 处 $E_y = 0$。

**波导壁电流（TE$_{10}$）：** $\mathbf{J}_s = \hat{\mathbf{n}} \times \mathbf{H}|_{\text{壁}}$

宽壁中央电流沿纵向。开槽/缝隙天线必须沿电流方向切割。

!!! example "例题"

    **例题 7.1**
    **题目：** 矩形波导 $a\times b = 0.08\,\text{m}\times0.04\,\text{m}$，填充空气。判断频率为 $4\,\text{GHz}$ 的电磁波能否在该矩形波导中以 $\mathrm{TE}_{10}$ 模式传输？能否以 $\mathrm{TE}_{20}$ 模式传输？

    **解：**

    频率 $f = 4\,\text{GHz}$ 对应的自由空间波长：

    $$\lambda = \frac{c}{f} = \frac{3\times10^8}{4\times10^9} = 0.075 \;\text{m}$$

    **(1) $\mathrm{TE}_{10}$ 模式**

    截止波长：$\lambda_c = 2a = 2\times0.08 = 0.16\;\text{m}$

    截止频率：$f_c = \dfrac{c}{\lambda_c} = \dfrac{3\times10^8}{0.16} = 1.875\;\text{GHz}$

    由于 $f = 4\;\text{GHz} > f_c = 1.875\;\text{GHz}$，$\mathrm{TE}_{10}$ 模式**可以传输**。

    **(2) $\mathrm{TE}_{20}$ 模式**

    截止波长：$\lambda_c = a = 0.08\;\text{m}$

    截止频率：$f_c = \dfrac{c}{\lambda_c} = \dfrac{3\times10^8}{0.08} = 3.75\;\text{GHz}$

    由于 $f = 4\;\text{GHz} > f_c = 3.75\;\text{GHz}$，$\mathrm{TE}_{20}$ 模式**也可以传输**。

    **例题 7.2**
    **题目：** 填充空气的矩形波导 $a = 0.02286\,\text{m}$，$b = 0.01016\,\text{m}$。求 $\mathrm{TE}_{10}$ 模式的截止波长、截止频率。频率为 $10\,\text{GHz}$ 和 $4\,\text{GHz}$ 的 $\mathrm{TE}_{10}$ 波能否传输？若可以，求其相移常数、波导波长、相速度和波阻抗。若波导中填充介电常数 $\varepsilon_r = 4$ 的介质，重新判断上述两个频率能否传输。

    **解：**

    **(1) 空气填充**

    截止波长：$\lambda_c = 2a = 0.04572\;\text{m}$

    截止频率：$f_c = \dfrac{c}{\lambda_c} = \dfrac{3\times10^8}{0.04572} \approx 6.56\;\text{GHz}$

    - $f = 10\,\text{GHz} > f_c = 6.56\,\text{GHz}$：**可以传输**

      相移常数：$\beta = \sqrt{k^2 - k_c^2} = \sqrt{\left(\frac{2\pi f}{c}\right)^2 - \left(\frac{\pi}{a}\right)^2}$

      $$\beta = \sqrt{\left(\frac{2\pi\times10^{10}}{3\times10^8}\right)^2 - \left(\frac{\pi}{0.02286}\right)^2} \approx 158.07 \;\text{rad/m}$$

      波导波长：$\lambda_g = \dfrac{2\pi}{\beta} = \dfrac{2\pi}{158.07} \approx 0.03975\;\text{m}$

      相速度：$v_p = \dfrac{\omega}{\beta} = \dfrac{2\pi\times10^{10}}{158.07} \approx 3.98\times10^8\;\text{m/s}$

      波阻抗：$Z_{\mathrm{TE}_{10}} = \dfrac{\eta_0}{\sqrt{1-(f_c/f)^2}} = \dfrac{377}{\sqrt{1-(6.56/10)^2}} \approx 500\;\Omega$

    - $f = 4\,\text{GHz} < f_c = 6.56\;\text{GHz}$：**不可传输**（截止）

    **(2) 填充 $\varepsilon_r = 4$ 介质**

    截止频率降低：$f_c' = \dfrac{c}{2a\sqrt{\varepsilon_r}} = \dfrac{6.56}{2} = 3.28\;\text{GHz}$

    - $f = 10\,\text{GHz} > f_c' = 3.28\;\text{GHz}$：**可以传输**
    - $f = 4\,\text{GHz} > f_c' = 3.28\;\text{GHz}$：**可以传输**

    **结论：** 填充介质后截止频率降低，原来被截止的 $4\,\text{GHz}$ 波也可以传输。

!!! warning "真题"

    **真题 7.2（来源：2024秋季A卷）**
    **题目：** 矩形波导尺寸 $a = 22.86$ mm，$b = 10.16$ mm，工作频率 $f = 6$ GHz。

    (1) 波导内填充空气时，$\mathrm{TE}_{10}$ 模能否传输？

    (2) 若波导内填充 $\varepsilon_r = 2$、$\mu_r = 2$ 的介质，$\mathrm{TE}_{10}$ 模能否传输？

    **解：**

    $\mathrm{TE}_{10}$ 模的截止波长和截止频率为：

    $$\lambda_c = 2a = 2 \times 22.86 = 45.72 \;\text{mm} = 4.572 \;\text{cm}$$

    $$f_c = \frac{c}{2a} = \frac{3\times10^8}{2\times 0.02286} \approx 6.56 \;\text{GHz}$$

    **(1) 空气填充：**

    工作波长 $\lambda_0 = c/f = 3\times10^8 / (6\times10^9) = 5$ cm。

    由于 $\lambda_0 = 5\;\text{cm} > \lambda_c = 4.572\;\text{cm}$（即 $f = 6\;\text{GHz} < f_c = 6.56\;\text{GHz}$），$\mathrm{TE}_{10}$ 模**不能传输**。

    **(2) 填充 $\varepsilon_r = \mu_r = 2$ 介质：**

    介质中的截止频率降低为：

    $$f_c' = \frac{c}{2a\sqrt{\varepsilon_r\mu_r}} = \frac{6.56}{\sqrt{4}} = 3.28 \;\text{GHz}$$

    介质中的工作波长为：

    $$\lambda = \frac{c}{f\sqrt{\varepsilon_r\mu_r}} = \frac{3\times10^8}{6\times10^9 \times 2} = 2.5 \;\text{cm}$$

    由于 $\lambda = 2.5\;\text{cm} < \lambda_c = 4.572\;\text{cm}$（即 $f = 6\;\text{GHz} > f_c' = 3.28\;\text{GHz}$），$\mathrm{TE}_{10}$ 模**可以传输**。

    **结论：** 填充介质后截止频率降低，原本截止的频率变为可传输。这是通过介质加载扩展波导工作频带的常用方法。

### 7.3 圆波导

圆波导半径 $a$。

**TE$_{mn}$ 模：**

$$H_z = H_0 J_m(k_c\rho)\cos(m\phi),\quad J_m'(k_c a) = 0$$

$k_c = p'_{mn}/a$，$p'_{mn}$ 为 $J_m'(x) = 0$ 的第 $n$ 个根。

**TM$_{mn}$ 模：**

$$E_z = E_0 J_m(k_c\rho)\cos(m\phi),\quad J_m(k_c a) = 0$$

$k_c = p_{mn}/a$，$p_{mn}$ 为 $J_m(x) = 0$ 的第 $n$ 个根。

**常用模式：**

| 模式 | $k_c a$ | $\lambda_c$ | 特点 |
|------|---------|-------------|------|
| TE$_{11}$ | 1.841 | $3.41a$ | 主模，有极化简并 |
| TM$_{01}$ | 2.405 | $2.61a$ | 轴对称场，旋转关节 |
| TE$_{01}$ | 3.832 | $1.64a$ | 低损耗，远距离传输 |

### 7.4 同轴线

同轴线可传播 TEM 模（主模）。

内外导体间电压满足：$V(\rho) = V_0\frac{\ln(b/\rho)}{\ln(b/a)}$

场分布：
$$E_\rho = \frac{V_0}{\rho\ln(b/a)},\quad H_\phi = \frac{I}{2\pi\rho}$$

**特性阻抗：**

$$Z_0 = \frac{60}{\sqrt{\varepsilon_r}}\ln\left(\frac{b}{a}\right)\,\Omega$$

常用值：$50\,\Omega$（微波）、$75\,\Omega$（视频/有线电视）

高次模抑制条件：$\lambda > \pi(a + b)$

### 7.5 传输线理论

传输线是分布参数电路，适用于 TEM 导波结构。

**电报方程（时域）：**

$$\frac{\partial v}{\partial z} = -Ri - L\frac{\partial i}{\partial t},\quad \frac{\partial i}{\partial z} = -Gv - C\frac{\partial v}{\partial t}$$

**频域解（无耗线 $R=0, G=0$）：**

$$\gamma = j\beta = j\omega\sqrt{LC},\quad Z_0 = \sqrt{\frac{L}{C}}$$

$$V(z) = V_0^+ e^{-j\beta z} + V_0^- e^{+j\beta z}$$

$$I(z) = \frac{V_0^+}{Z_0} e^{-j\beta z} - \frac{V_0^-}{Z_0} e^{+j\beta z}$$

**终端接负载 $Z_L$ 时输入阻抗：**

$$Z_{in}(l) = Z_0\frac{Z_L + jZ_0\tan(\beta l)}{Z_0 + jZ_L\tan(\beta l)}$$

**特殊情况：**
- 短路（$Z_L = 0$）：$Z_{in} = jZ_0\tan(\beta l)$
- 开路（$Z_L = \infty$）：$Z_{in} = -jZ_0\cot(\beta l)$
- $\lambda/4$ 变换器（$l = \lambda/4$）：$Z_{in} = Z_0^2/Z_L$

**反射系数与阻抗关系：**

$$\Gamma(l) = \frac{Z_{in}(l) - Z_0}{Z_{in}(l) + Z_0} = \Gamma_L e^{-2j\beta l}$$

Smith 圆图是处理传输线阻抗匹配的图形工具，将复反射系数和归一化阻抗的映射关系可视化。

!!! warning "真题"

    **真题 7.1（来源：2024秋季A卷）**
    **题目：** 一根无损耗传输线的特性阻抗 $Z_0 = 50\;\Omega$，长度 $l = 2$ m，工作频率 $f = 200$ MHz，终端负载阻抗 $Z_L = 40 + j30\;\Omega$。设传输线中波的相速度等于光速 $c$，求该传输线的输入阻抗。

    **解：**

    **相移常数：**

    $$\beta = \frac{\omega}{c} = \frac{2\pi \times 200\times10^6}{3\times10^8} = \frac{4\pi}{3} \;\text{rad/m}$$

    $$\beta l = \frac{4\pi}{3} \times 2 = \frac{8\pi}{3} = 2\pi + \frac{2\pi}{3}$$

    $$\tan(\beta l) = \tan\frac{2\pi}{3} = -\sqrt{3}$$

    **输入阻抗公式：**

    $$Z_{\text{in}} = Z_0\,\frac{Z_L + jZ_0\tan(\beta l)}{Z_0 + jZ_L\tan(\beta l)}$$

    **分子：**

    $$Z_L + jZ_0\tan(\beta l) = (40 + j30) + j\times 50\times(-\sqrt{3}) = 40 + j(30 - 50\sqrt{3}) = 40 - j56.6$$

    **分母：**

    $$Z_0 + jZ_L\tan(\beta l) = 50 + j(40+j30)(-\sqrt{3}) = 50 + 30\sqrt{3} - j40\sqrt{3} = 101.96 - j69.28$$

    **输入阻抗：**

    $$Z_{\text{in}} = 50\times\frac{40 - j56.6}{101.96 - j69.28} \approx 26.3 - j9.9 \;\Omega$$

!!! warning "真题"

    **真题 7.3（来源：2021秋季B卷 一、5）**
    **题目：** 空气中矩形波导的尺寸为 $a\times b$。当该波导传输 $\mathrm{TM}_{mn}$ 模式的电磁波时，其截止频率为？

    **答案：**

    $$f_c = \frac{c}{2}\sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$$

    （$\mathrm{TM}$ 模要求 $m\neq 0$ 且 $n\neq 0$。）

!!! warning "真题"

    **真题 7.4（来源：2022秋季B卷 二、1）**
    **题目：** 同轴线的主横是什么模式？若主模的频率为 $3\;\text{GHz}$，同轴线中填充的介质为 $\varepsilon_r = 2.25$、$\mu_r = 1$，求主模的相速度 $v$、波长 $\lambda$，并求一段长度为 $30\;\text{m}$ 的同轴线带来的传播延时。

    **解：**

    同轴线的主模是 **TEM 模式**（横电磁波模式）。

    相速度：

    $$v = \frac{c}{\sqrt{\varepsilon_r\mu_r}} = \frac{3\times10^8}{\sqrt{2.25}} = \frac{3\times10^8}{1.5} = 2\times10^8\;\text{m/s}$$

    波长：

    $$\lambda = \frac{v}{f} = \frac{2\times10^8}{3\times10^9} = 0.067\;\text{m} = 6.7\;\text{cm}$$

    传播延时：

    $$\tau = \frac{l}{v} = \frac{30}{2\times10^8} = 1.5\times10^{-7}\;\text{s} = 150\;\text{ns}$$

!!! warning "真题"

    **真题 7.5（来源：2022秋季B卷 二、2）**
    **题目：** 无耗传输线特性阻抗为 $Z_0 = 70\;\Omega$，终端负载阻抗为 $Z_L = (70 + j140)\;\Omega$，求：

    (1) 终端反射系数 $\Gamma_L$；
    (2) 驻波比 $\rho$。

    **解：**

    **(1) 终端反射系数：**

    $$\Gamma_L = \frac{Z_L - Z_0}{Z_L + Z_0} = \frac{(70+j140) - 70}{(70+j140) + 70} = \frac{j140}{140 + j140} = \frac{j}{1+j}$$

    $$= \frac{j(1-j)}{(1+j)(1-j)} = \frac{1+j}{2}$$

    $$|\Gamma_L| = \frac{\sqrt{1^2+1^2}}{2} = \frac{\sqrt{2}}{2} \approx 0.707$$

    **(2) 驻波比：**

    $$\rho = \frac{1+|\Gamma_L|}{1-|\Gamma_L|} = \frac{1+\frac{\sqrt{2}}{2}}{1-\frac{\sqrt{2}}{2}} = \frac{2+\sqrt{2}}{2-\sqrt{2}} = \frac{(2+\sqrt{2})^2}{(2-\sqrt{2})(2+\sqrt{2})} = \frac{4+4\sqrt{2}+2}{4-2} = \frac{6+4\sqrt{2}}{2} = 3+2\sqrt{2} \approx 5.83$$

!!! warning "真题"

    **真题 7.6（来源：2022秋季B卷 三、2）**
    **题目：** 一个空气填充的标准波导 WRG-16，其宽边尺寸为 $a = 22.9\;\text{mm}$，窄边尺寸为 $b = 10.2\;\text{mm}$。若该波导仅存在 $\mathrm{TE}_{10}$ 模的电磁波时，电磁波的工作频率至少高出 $\mathrm{TE}_{10}$ 模截止频率的 $10\%$，但不超过 $\mathrm{TE}_{20}$ 模截止频率的 $90\%$，求该电磁波的工作频带。

    **解：**

    $\mathrm{TE}_{10}$ 模截止频率：

    $$f_{c10} = \frac{c}{2a} = \frac{3\times10^8}{2\times0.0229} = 6.55\times10^9\;\text{Hz} = 6.55\;\text{GHz}$$

    $\mathrm{TE}_{20}$ 模截止频率：

    $$f_{c20} = \frac{c}{a} = \frac{3\times10^8}{0.0229} = 13.1\times10^9\;\text{Hz} = 13.1\;\text{GHz}$$

    工作频率范围：

    $$1.1\,f_{c10} \leq f \leq 0.9\,f_{c20}$$

    $$7.21\;\text{GHz} \leq f \leq 11.79\;\text{GHz}$$

!!! warning "真题"

    **真题 7.7（来源：2022秋季A卷 三、1）**
    **题目：** 空气填充的矩形波导尺寸为 $a\times b$，工作在 $\mathrm{TE}_{10}$ 模式下，电场强度为：

    $$\dot{E}_y = E_0\sin\!\left(\frac{\pi x}{a}\right)e^{-j\beta z}\;\text{(V/m)}$$

    求波导壁上的电流密度 $\mathbf{J}_s$。

    **解：**

    由 $\nabla\times\dot{\mathbf{E}} = -j\omega\mu_0\dot{\mathbf{H}}$ 可得：

    $$\dot{H}_x = -\frac{\beta E_0}{\omega\mu_0}\sin\!\left(\frac{\pi x}{a}\right)e^{-j\beta z} = -\frac{E_0}{\eta_0}\sin\!\left(\frac{\pi x}{a}\right)e^{-j\beta z}$$

    $$\dot{H}_z = \frac{j\pi E_0}{\omega\mu_0 a}\cos\!\left(\frac{\pi x}{a}\right)e^{-j\beta z}$$

    由边界条件 $\mathbf{J}_s = \hat{\mathbf{n}}\times\dot{\mathbf{H}}$：

    - 波导壁 $x=0$：$\hat{\mathbf{n}}=\hat{\mathbf{x}}$，$\mathbf{J}_s = \hat{\mathbf{x}}\times\dot{\mathbf{H}} = -\hat{\mathbf{y}}\,\dfrac{j\pi E_0}{\omega\mu_0 a}\,e^{-j\beta z}$

    - 波导壁 $x=a$：$\hat{\mathbf{n}}=-\hat{\mathbf{x}}$，$\mathbf{J}_s = -\hat{\mathbf{x}}\times\dot{\mathbf{H}} = \hat{\mathbf{y}}\,\dfrac{j\pi E_0}{\omega\mu_0 a}\,e^{-j\beta z}$

    - 波导壁 $y=0$：$\hat{\mathbf{n}}=\hat{\mathbf{y}}$：

    $$\mathbf{J}_s = \hat{\mathbf{y}}\times\dot{\mathbf{H}} = \hat{\mathbf{z}}\,\frac{E_0}{\eta_0}\sin\!\left(\frac{\pi x}{a}\right)e^{-j\beta z} + \hat{\mathbf{x}}\,\frac{j\pi E_0}{\omega\mu_0 a}\cos\!\left(\frac{\pi x}{a}\right)e^{-j\beta z}$$

    - 波导壁 $y=b$：$\hat{\mathbf{n}}=-\hat{\mathbf{y}}$，方向相反。

!!! warning "真题"

    **真题 7.8（来源：2023春季A卷 三、3）**
    **题目：** 一空气填充的矩形波导，其尺寸为 $a\times b = 7\;\text{mm}\times4\;\text{mm}$，电磁波的工作频率为 $f = 30\;\text{GHz}$。(1) 求该波导可能存在的传输模式；(2) 求主模的波导波长、相速度。

    **解：**

    **(1) 传输模式**

    工作波长：$\lambda = \dfrac{c}{f} = \dfrac{3\times10^8}{30\times10^9} = 10\;\text{mm} = 0.01\;\text{m}$

    $\mathrm{TE}_{mn}$ 模截止波长：$\lambda_c = \dfrac{2}{\sqrt{(m/a)^2 + (n/b)^2}}$

    - $\mathrm{TE}_{10}$：$\lambda_c = 2a = 14\;\text{mm}$，$\lambda < \lambda_c$ ✓
    - $\mathrm{TE}_{20}$：$\lambda_c = a = 7\;\text{mm}$，$\lambda > \lambda_c$ ✗
    - $\mathrm{TE}_{01}$：$\lambda_c = 2b = 8\;\text{mm}$，$\lambda > \lambda_c$ ✗
    - $\mathrm{TE}_{11}$：$\lambda_c = \dfrac{2}{\sqrt{(1/7)^2+(1/4)^2}} = \dfrac{2}{\sqrt{0.0204+0.0625}} = \dfrac{2}{0.288} = 6.94\;\text{mm}$，$\lambda > \lambda_c$ ✗

    故只能传输 $\mathrm{TE}_{10}$ 模。

    **(2) 主模波导波长和相速度**

    $\mathrm{TE}_{10}$ 截止频率：$f_c = \dfrac{c}{2a} = \dfrac{3\times10^8}{2\times0.007} = 21.43\;\text{GHz}$

    波导波长：

    $$\lambda_g = \frac{\lambda}{\sqrt{1-(f_c/f)^2}} = \frac{10}{\sqrt{1-(21.43/30)^2}} = \frac{10}{\sqrt{1-0.510}} = \frac{10}{0.700} \approx 14.3\;\text{mm}$$

    相速度：

    $$v_p = \frac{c}{\sqrt{1-(f_c/f)^2}} = \frac{3\times10^8}{0.700} \approx 4.29\times10^8\;\text{m/s}$$

!!! warning "真题"

    **真题 7.9（来源：2023春季B卷 三、4）**
    **题目：** 一矩形波导的宽边为 $a = 8\;\text{cm}$，窄边为 $b = 4\;\text{cm}$。当工作频率 $f = 3\;\text{GHz}$ 时波导中可传输哪些模式？当工作频率为 $5\;\text{GHz}$ 时又可传输哪些模式？

    **解：**

    **(1) $f = 3\;\text{GHz}$ 时**

    $\lambda = c/f = 10\;\text{cm}$

    各模截止波长：

    - $\mathrm{TE}_{10}$：$\lambda_c = 2a = 16\;\text{cm}$，$\lambda < \lambda_c$ ✓
    - $\mathrm{TE}_{20}$：$\lambda_c = a = 8\;\text{cm}$，$\lambda > \lambda_c$ ✗
    - $\mathrm{TE}_{01}$：$\lambda_c = 2b = 8\;\text{cm}$，$\lambda > \lambda_c$ ✗
    - $\mathrm{TE}_{11}/\mathrm{TM}_{11}$：$\lambda_c = \dfrac{2}{\sqrt{(1/8)^2+(1/4)^2}} = \dfrac{2}{0.559} = 7.15\;\text{cm}$，$\lambda > \lambda_c$ ✗

    只能传输 $\mathrm{TE}_{10}$ 模。

    **(2) $f = 5\;\text{GHz}$ 时**

    $\lambda = c/f = 6\;\text{cm}$

    - $\mathrm{TE}_{10}$：$\lambda_c = 16\;\text{cm}$ ✓
    - $\mathrm{TE}_{20}$：$\lambda_c = 8\;\text{cm}$ ✓
    - $\mathrm{TE}_{01}$：$\lambda_c = 8\;\text{cm}$ ✓
    - $\mathrm{TE}_{11}/\mathrm{TM}_{11}$：$\lambda_c = 7.15\;\text{cm}$ ✓
    - $\mathrm{TE}_{30}$：$\lambda_c = 2a/3 = 5.33\;\text{cm}$，$\lambda > \lambda_c$ ✗

    可传输 $\mathrm{TE}_{10}$、$\mathrm{TE}_{20}$、$\mathrm{TE}_{01}$、$\mathrm{TE}_{11}$、$\mathrm{TM}_{11}$ 模。

!!! warning "真题"

    **真题 7.10（来源：2023秋季A卷 三、1）**
    **题目：** 一矩形波导截面边长尺寸为 $a = 7\;\text{cm}$，$b = 3\;\text{cm}$。求：(1) 当工作频率 $f = 3\;\text{GHz}$ 时波导中可传输哪些 TE 波形？(2) 当工作频率为 $5\;\text{GHz}$ 时波导中又可传输哪些类型？

    **解：**

    **(1) $f = 3\;\text{GHz}$ 时**

    $\lambda = c/f = 10\;\text{cm}$

    - $\mathrm{TE}_{10}$：$\lambda_c = 2a = 14\;\text{cm}$，$\lambda < \lambda_c$ ✓
    - $\mathrm{TE}_{01}$：$\lambda_c = 2b = 6\;\text{cm}$，$\lambda > \lambda_c$ ✗
    - $\mathrm{TE}_{20}$：$\lambda_c = a = 7\;\text{cm}$，$\lambda > \lambda_c$ ✗
    - $\mathrm{TE}_{11}$：$\lambda_c = \dfrac{2}{\sqrt{(1/7)^2+(1/3)^2}} = \dfrac{2}{0.391} = 5.12\;\text{cm}$，$\lambda > \lambda_c$ ✗

    只能传输 $\mathrm{TE}_{10}$ 模。

    **(2) $f = 5\;\text{GHz}$ 时**

    $\lambda = c/f = 6\;\text{cm}$

    - $\mathrm{TE}_{10}$：$\lambda_c = 14\;\text{cm}$ ✓
    - $\mathrm{TE}_{20}$：$\lambda_c = 7\;\text{cm}$ ✓
    - $\mathrm{TE}_{01}$：$\lambda_c = 6\;\text{cm}$，$\lambda = \lambda_c$（临界，不能传输）
    - $\mathrm{TE}_{11}$：$\lambda_c = 5.12\;\text{cm}$，$\lambda > \lambda_c$ ✗

    能传输 $\mathrm{TE}_{10}$、$\mathrm{TE}_{20}$ 模。

!!! warning "真题"

    **真题 7.11（来源：2023秋季B卷 三、1）**
    **题目：** 在空气中，试求以下两种横截面尺寸不同的矩形波导工作在 $\mathrm{TM}_{11}$ 模式下的截止频率。

    (1) $a\times b = 40.4\;\text{mm}\times20.2\;\text{mm}$
    (2) $a\times b = 8.6\;\text{mm}\times4.3\;\text{mm}$

    **解：**

    $\mathrm{TM}_{11}$ 模截止频率公式：

    $$f_c = \frac{c}{2}\sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2} = \frac{c}{2}\sqrt{\frac{1}{a^2}+\frac{1}{b^2}}$$

    **(1) $a = 40.4\;\text{mm}$，$b = 20.2\;\text{mm}$**

    $$f_c = \frac{3\times10^8}{2}\sqrt{\left(\frac{1}{0.0404}\right)^2 + \left(\frac{1}{0.0202}\right)^2}$$

    $$= 1.5\times10^8\times\sqrt{612.6 + 2450.7} = 1.5\times10^8\times\sqrt{3063.3}$$

    $$= 1.5\times10^8\times55.35 = 8.3\times10^9\;\text{Hz} = 8.3\;\text{GHz}$$

    **(2) $a = 8.6\;\text{mm}$，$b = 4.3\;\text{mm}$**

    $$f_c = \frac{3\times10^8}{2}\sqrt{\left(\frac{1}{0.0086}\right)^2 + \left(\frac{1}{0.0043}\right)^2}$$

    $$= 1.5\times10^8\times\sqrt{13521 + 54083} = 1.5\times10^8\times\sqrt{67604}$$

    $$= 1.5\times10^8\times260 = 39\;\text{GHz}$$

!!! warning "真题"

    **真题 7.12（来源：2024春季A卷 三、3）**
    **题目：** 理想矩形波导内壁尺寸为 $a = 6\;\text{cm}$，$b = 3\;\text{cm}$，波导填充介质为空气，波导中传播电磁波的频率为 $3\;\text{GHz}$。求：(1) 该电磁波在自由空间的波长 $\lambda_0$ 和波数 $k_0$；(2) 波导中可传输的模式；(3) 主模的波导波长和相速度。

    **解：**

    **(1) 自由空间参数**

    $$\lambda_0 = \frac{c}{f} = \frac{3\times10^8}{3\times10^9} = 0.1\;\text{m} = 10\;\text{cm}$$

    $$k_0 = \frac{2\pi}{\lambda_0} = 20\pi\;\text{rad/m}$$

    **(2) 传输模式**

    - $\mathrm{TE}_{10}$：$\lambda_c = 2a = 12\;\text{cm}$，$\lambda_0 < \lambda_c$ ✓
    - $\mathrm{TE}_{20}$：$\lambda_c = a = 6\;\text{cm}$，$\lambda_0 > \lambda_c$ ✗
    - $\mathrm{TE}_{01}$：$\lambda_c = 2b = 6\;\text{cm}$，$\lambda_0 > \lambda_c$ ✗

    只能传输 $\mathrm{TE}_{10}$ 模。

    **(3) 波导波长和相速度**

    截止频率：$f_c = \dfrac{c}{2a} = \dfrac{3\times10^8}{0.12} = 2.5\;\text{GHz}$

    $$\lambda_g = \frac{\lambda_0}{\sqrt{1-(f_c/f)^2}} = \frac{10}{\sqrt{1-(2.5/3)^2}} = \frac{10}{\sqrt{1-0.694}} = \frac{10}{0.553} \approx 18.1\;\text{cm}$$

    $$v_p = \frac{c}{\sqrt{1-(f_c/f)^2}} = \frac{3\times10^8}{0.553} \approx 5.43\times10^8\;\text{m/s}$$

!!! warning "真题"

    **真题 7.13（来源：2024春季B卷 三、2）**
    **题目：** 空气填充的矩形波导，宽边为 $a$，窄边为 $b$，工作在 $\mathrm{TE}_{10}$ 模式下，电场强度为：

    $$\dot{E}_y = 5\sin\!\left(\frac{\pi x}{a}\right)e^{-j\beta z}\;\text{(V/m)}$$

    分别求四个波导壁上的电流密度 $\mathbf{J}_s$。

    **解：**

    由 $\nabla\times\dot{\mathbf{E}} = -j\omega\mu_0\dot{\mathbf{H}}$ 可得：

    $$\dot{H}_x = -\frac{5}{\eta_0}\sin\!\left(\frac{\pi x}{a}\right)e^{-j\beta z}$$

    $$\dot{H}_z = \frac{j5\pi}{\omega\mu_0 a}\cos\!\left(\frac{\pi x}{a}\right)e^{-j\beta z}$$

    由 $\mathbf{J}_s = \hat{\mathbf{n}}\times\dot{\mathbf{H}}$：

    - **$x=0$ 壁**（$\hat{\mathbf{n}}=\hat{\mathbf{x}}$）：$\mathbf{J}_s = -\hat{\mathbf{y}}\,\dfrac{j5\pi}{\omega\mu_0 a}\,e^{-j\beta z}$

    - **$x=a$ 壁**（$\hat{\mathbf{n}}=-\hat{\mathbf{x}}$）：$\mathbf{J}_s = \hat{\mathbf{y}}\,\dfrac{j5\pi}{\omega\mu_0 a}\,e^{-j\beta z}$

    - **$y=0$ 壁**（$\hat{\mathbf{n}}=\hat{\mathbf{y}}$）：

    $$\mathbf{J}_s = \hat{\mathbf{z}}\,\frac{5}{\eta_0}\sin\!\left(\frac{\pi x}{a}\right)e^{-j\beta z} + \hat{\mathbf{x}}\,\frac{j5\pi}{\omega\mu_0 a}\cos\!\left(\frac{\pi x}{a}\right)e^{-j\beta z}$$

    - **$y=b$ 壁**（$\hat{\mathbf{n}}=-\hat{\mathbf{y}}$）：方向相反。

!!! warning "真题"

    **真题 7.14（来源：2024秋季B卷 三、2）**
    **题目：** 空气填充的矩形波导尺寸为 $a\times b$，工作在 $\mathrm{TE}_{10}$ 模式下，电场强度为：

    $$\dot{E}_y = E_0\sin\!\left(\frac{\pi x}{a}\right)e^{-j\beta z}\;\text{(V/m)}$$

    求波导壁上的电流密度 $\mathbf{J}_s$。

    **解：**

    与真题 7.7、7.13 同类型。由 $\nabla\times\dot{\mathbf{E}} = -j\omega\mu_0\dot{\mathbf{H}}$：

    $$\dot{H}_x = -\frac{E_0}{\eta_0}\sin\!\left(\frac{\pi x}{a}\right)e^{-j\beta z}$$

    $$\dot{H}_z = \frac{j\pi E_0}{\omega\mu_0 a}\cos\!\left(\frac{\pi x}{a}\right)e^{-j\beta z}$$

    由 $\mathbf{J}_s = \hat{\mathbf{n}}\times\dot{\mathbf{H}}$：

    - **$x=0$ 壁**：$\mathbf{J}_s = -\hat{\mathbf{y}}\,\dfrac{j\pi E_0}{\omega\mu_0 a}\,e^{-j\beta z}$

    - **$x=a$ 壁**：$\mathbf{J}_s = \hat{\mathbf{y}}\,\dfrac{j\pi E_0}{\omega\mu_0 a}\,e^{-j\beta z}$

    - **$y=0$ 壁**：$\mathbf{J}_s = \hat{\mathbf{x}}\,\dfrac{j\pi E_0}{\omega\mu_0 a}\cos\!\left(\dfrac{\pi x}{a}\right)e^{-j\beta z} + \hat{\mathbf{z}}\,\dfrac{E_0}{\eta_0}\sin\!\left(\dfrac{\pi x}{a}\right)e^{-j\beta z}$

    - **$y=b$ 壁**：方向相反。

---

[← 上一章: 第6章 均匀平面波的反射与透射](../06-均匀平面波的反射与透射/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第8章 电磁辐射](../08-电磁辐射/index.md)
