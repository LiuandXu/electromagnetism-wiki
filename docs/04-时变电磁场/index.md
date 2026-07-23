# 第4章 时变电磁场

### 4.1 波动方程

从麦克斯韦方程组出发，可导出电磁场的波动方程，揭示电磁波的传播本质。

在无源区域（$\rho = 0, \mathbf{J} = 0$）：

$$\nabla \times (\nabla \times \mathbf{E}) = \nabla \times \left(-\frac{\partial \mathbf{B}}{\partial t}\right) = -\mu\frac{\partial}{\partial t}(\nabla \times \mathbf{H}) = -\mu\varepsilon\frac{\partial^2 \mathbf{E}}{\partial t^2}$$

利用 $\nabla \times \nabla \times \mathbf{E} = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$，且无源区域 $\nabla \cdot \mathbf{E} = 0$：

$$\nabla^2 \mathbf{E} - \mu\varepsilon\frac{\partial^2 \mathbf{E}}{\partial t^2} = 0$$

$$\nabla^2 \mathbf{H} - \mu\varepsilon\frac{\partial^2 \mathbf{H}}{\partial t^2} = 0$$

**波速：** $v = \frac{1}{\sqrt{\mu\varepsilon}}$，真空中 $c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3 \times 10^8\,\mathrm{m/s}$

这一结果揭示了光是电磁波的本质。

!!! warning "真题"


    **真题 4.1（来源：2021秋季B卷）**
    **题目：** 真空中有一 $N$ 匝圆形线圈，半径为 $a$，线圈平面与 $xy$ 平面重合，圆心在原点。空间中存在均匀磁场 $\mathbf{B} = B_0 \cos(\omega t)\,\hat{\mathbf{z}}$，其中 $\omega$ 为角频率。求线圈中的感应电动势。

    ??? note "点击查看解答"

        **解：**

        穿过单匝线圈的磁通量为：

        $$\Phi = \int_S \mathbf{B} \cdot d\mathbf{S} = B_0 \cos(\omega t) \cdot \pi a^2$$

        $N$ 匝线圈的总磁通链为：

        $$\pmb{\Psi} = N\Phi = N\pi a^2 B_0 \cos(\omega t)$$

        由法拉第电磁感应定律，感应电动势为：

        $$\mathcal{E} = -\frac{d\pmb{\Psi}}{dt} = N\pi a^2 \omega B_0 \sin(\omega t)$$

        因此：

        $$\boxed{\mathcal{E} = N\pi a^2 \omega B_0 \sin(\omega t)}$$

        **真题 4.2（来源：2024秋季A卷）**
        **题目：** 证明真空中无源区域（$\rho = 0$，$\mathbf{J} = 0$）的电场 $\mathbf{E} = E_0 \cos\!\left[\omega\!\left(t - \dfrac{x}{c}\right)\right]\hat{\mathbf{z}}$ 满足波动方程 $\nabla^2 \mathbf{E} - \dfrac{1}{c^2}\dfrac{\partial^2 \mathbf{E}}{\partial t^2} = 0$，其中 $c = 1/\sqrt{\mu_0\varepsilon_0}$。

        **解：**

        令 $k = \omega/c$，则 $\mathbf{E} = E_0 \cos(\omega t - kx)\,\hat{\mathbf{z}}$。

        **时间二阶偏导：**

        $$\frac{\partial^2 \mathbf{E}}{\partial t^2} = -\omega^2 E_0 \cos(\omega t - kx)\,\hat{\mathbf{z}}$$

        $$\frac{1}{c^2}\frac{\partial^2 \mathbf{E}}{\partial t^2} = -\frac{\omega^2}{c^2} E_0 \cos(\omega t - kx)\,\hat{\mathbf{z}} = -k^2 E_0 \cos(\omega t - kx)\,\hat{\mathbf{z}}$$

        **空间二阶偏导（拉普拉斯）：**

        由于 $\mathbf{E}$ 仅有 $z$ 分量且仅依赖 $x$ 和 $t$：

        $$\nabla^2 \mathbf{E} = \frac{\partial^2 \mathbf{E}}{\partial x^2}\,\hat{\mathbf{z}} = -k^2 E_0 \cos(\omega t - kx)\,\hat{\mathbf{z}}$$

        **代入波动方程：**

        $$\nabla^2 \mathbf{E} - \frac{1}{c^2}\frac{\partial^2 \mathbf{E}}{\partial t^2} = -k^2 E_0 \cos(\omega t - kx)\,\hat{\mathbf{z}} - \left(-k^2 E_0 \cos(\omega t - kx)\,\hat{\mathbf{z}}\right) = 0$$

        因此该电场满足无源区域的波动方程。$\blacksquare$


### 4.2 电磁场的位函数

**矢量位 $\mathbf{A}$ 和标量位 $\Phi$：**

$$\mathbf{B} = \nabla \times \mathbf{A}$$

$$\mathbf{E} = -\nabla \Phi - \frac{\partial \mathbf{A}}{\partial t}$$

**规范不变性：** $\mathbf{A}$ 和 $\Phi$ 不是唯一的，可以进行规范变换。

**洛伦兹规范（Lorentz Gauge）：**

$$\nabla \cdot \mathbf{A} + \mu\varepsilon\frac{\partial \Phi}{\partial t} = 0$$

在洛伦兹规范下，位函数满足达朗贝尔方程：

$$\nabla^2 \mathbf{A} - \mu\varepsilon\frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu\mathbf{J}$$

$$\nabla^2 \Phi - \mu\varepsilon\frac{\partial^2 \Phi}{\partial t^2} = -\frac{\rho}{\varepsilon}$$

这是非齐次波动方程，其解为滞后位（retarded potentials）。

**库仑规范（Coulomb Gauge）：** $\nabla \cdot \mathbf{A} = 0$，适用于静态场或低频分析。

### 4.3 时谐电磁场

时谐场（正弦电磁场）是单频稳态场，可用复矢量（相量）表示。

**时域-频域变换：**

$$\mathbf{E}(\mathbf{r}, t) = \operatorname{Re}[\dot{\mathbf{E}}(\mathbf{r}) e^{j\omega t}]$$

**麦克斯韦方程组的频域（复数）形式：**

$$\nabla \times \dot{\mathbf{H}} = \dot{\mathbf{J}} + j\omega\dot{\mathbf{D}} = (\sigma + j\omega\varepsilon)\dot{\mathbf{E}}$$

$$\nabla \times \dot{\mathbf{E}} = -j\omega\mu\dot{\mathbf{H}}$$

$$\nabla \cdot \dot{\mathbf{D}} = \dot{\rho},\quad \nabla \cdot \dot{\mathbf{B}} = 0$$

**复介电常数（有耗媒质）：**

$$\varepsilon_c = \varepsilon - j\frac{\sigma}{\omega} = \varepsilon(1 - j\tan\delta)$$

其中 $\tan\delta = \sigma/(\omega\varepsilon)$ 为损耗角正切。

**亥姆霍兹方程（Helmholtz Equation）：**

$$\nabla^2 \dot{\mathbf{E}} + k^2 \dot{\mathbf{E}} = 0,\quad \nabla^2 \dot{\mathbf{H}} + k^2 \dot{\mathbf{H}} = 0$$

$k = \omega\sqrt{\mu\varepsilon_c}$ 为复波数。

!!! example "例题"

    **例题 4.1**
    **题目：** 已知磁场强度的瞬时表达式为 $\mathbf{H}(t) = \hat{\mathbf{y}}\,H_0\sin(\omega t - \beta z)$，求其复数（相量）表示式。反之，已知电场强度的复数表示式为 $\dot{\mathbf{E}} = -j\hat{\mathbf{x}}\,E_0 e^{-j\beta z}$，写出其瞬时表达式。

    **解：**

    **(1) 瞬时表达式 → 复数表达式**

    首先将 $\sin$ 转换为 $\cos$：

    $$\sin(\omega t - \beta z) = \cos\!\left(\omega t - \beta z - \frac{\pi}{2}\right)$$

    利用 $\mathbf{H}(t) = \mathrm{Re}[\dot{\mathbf{H}}\,e^{j\omega t}]$，提取相量：

    $$\dot{\mathbf{H}} = \hat{\mathbf{y}}\,H_0\,e^{-j(\beta z + \pi/2)} = -j\hat{\mathbf{y}}\,H_0\,e^{-j\beta z}$$

    **(2) 复数表达式 → 瞬时表达式**

    将 $-j$ 写成指数形式：$-j = e^{-j\pi/2}$，故：

    $$\dot{\mathbf{E}} = \hat{\mathbf{x}}\,E_0\,e^{-j\pi/2}\,e^{-j\beta z} = \hat{\mathbf{x}}\,E_0\,e^{-j(\beta z + \pi/2)}$$

    $$\mathbf{E}(t) = \mathrm{Re}[\dot{\mathbf{E}}\,e^{j\omega t}] = \hat{\mathbf{x}}\,E_0\cos\!\left(\omega t - \beta z - \frac{\pi}{2}\right) = \hat{\mathbf{x}}\,E_0\sin(\omega t - \beta z)$$

### 4.4 电磁能量守恒 — 坡印廷定理

**坡印廷矢量（Poynting Vector）：**

$$\mathbf{S} = \mathbf{E} \times \mathbf{H} \quad (\mathrm{W/m^2})$$

表示电磁功率流密度（能流密度）。

**坡印廷定理（微分形式）：**

$$\nabla \cdot \mathbf{S} + \frac{\partial}{\partial t}\left(\frac{1}{2}\varepsilon E^2 + \frac{1}{2}\mu H^2\right) + \mathbf{J} \cdot \mathbf{E} = 0$$

或写为：

$$-\nabla \cdot \mathbf{S} = \frac{\partial w}{\partial t} + p_J$$

积分形式：

$$-\oint_S \mathbf{S} \cdot \mathrm{d}\mathbf{S} = \frac{\partial}{\partial t}\int_V (w_e + w_m)\mathrm{d}V + \int_V \sigma E^2\mathrm{d}V$$

物理意义：流入体积的电磁功率 = 电磁储能增加率 + 焦耳热损耗功率。

**时谐场的平均坡印廷矢量：**

$$\mathbf{S}_{av} = \frac{1}{T}\int_0^T \mathbf{S}\,\mathrm{d}t = \frac{1}{2}\operatorname{Re}[\dot{\mathbf{E}} \times \dot{\mathbf{H}}^*]$$

**复坡印廷矢量：** $\dot{\mathbf{S}} = \frac{1}{2}\dot{\mathbf{E}} \times \dot{\mathbf{H}}^*$

其实部为平均有功功率密度，虚部为无功功率密度。

!!! example "例题"

    **例题 4.2**
    **题目：** 已知无源自由空间的电场强度为 $\mathbf{E} = \hat{\mathbf{x}}\,E_0\sin(\omega t - \beta z)$（V/m），求：

    1. 磁场强度的瞬时表示式；
    2. 证明 $v = \omega/\beta$ 等于光速 $c$；
    3. 坡印亭矢量的时间平均值 $\mathbf{S}_{\mathrm{av}}$。

    **解：**

    **(1) 求磁场强度**

    将电场写成复数形式：$\dot{\mathbf{E}} = -j\hat{\mathbf{x}}\,E_0\,e^{-j\beta z}$

    由 $\nabla \times \dot{\mathbf{E}} = -j\omega\mu_0\dot{\mathbf{H}}$，计算旋度：

    $$\nabla \times \dot{\mathbf{E}} = \frac{\partial \dot{E}_x}{\partial z}\hat{\mathbf{y}} = -\beta E_0\,e^{-j\beta z}\,\hat{\mathbf{y}}$$

    $$\dot{\mathbf{H}} = \frac{\beta E_0}{j\omega\mu_0}\,e^{-j\beta z}\,\hat{\mathbf{y}} = -j\,\frac{\beta E_0}{\omega\mu_0}\,e^{-j\beta z}\,\hat{\mathbf{y}}$$

    转换回瞬时形式：

    $$\mathbf{H} = \hat{\mathbf{y}}\,\frac{\beta E_0}{\omega\mu_0}\sin(\omega t - \beta z)$$

    **(2) 证明波速等于光速**

    在自由空间中，$\beta = \omega\sqrt{\mu_0\varepsilon_0}$，因此：

    $$v = \frac{\omega}{\beta} = \frac{1}{\sqrt{\mu_0\varepsilon_0}} = c \approx 3\times10^8 \;\text{m/s}$$

    **(3) 求坡印亭矢量时间平均值**

    $$\mathbf{S}_{\mathrm{av}} = \frac{1}{2}\,\mathrm{Re}[\dot{\mathbf{E}} \times \dot{\mathbf{H}}^*]$$

    $$\dot{\mathbf{E}} \times \dot{\mathbf{H}}^* = (-j)(j)\,E_0\,\frac{\beta E_0}{\omega\mu_0}\,e^{-j\beta z}\,e^{j\beta z}\,(\hat{\mathbf{x}} \times \hat{\mathbf{y}}) = \frac{\beta E_0^2}{\omega\mu_0}\,\hat{\mathbf{z}}$$

    $$\mathbf{S}_{\mathrm{av}} = \frac{1}{2}\,\frac{\beta E_0^2}{\omega\mu_0}\,\hat{\mathbf{z}} = \frac{E_0^2}{2\eta_0}\,\hat{\mathbf{z}} \quad (\text{W/m}^2)$$

    其中 $\eta_0 = \omega\mu_0/\beta = \sqrt{\mu_0/\varepsilon_0} \approx 377\;\Omega$ 为自由空间波阻抗。

### 4.5 基本电磁定律 — 对偶原理与互易定理

**对偶原理（Duality Principle）：**

在无源区域（$\mathbf{J} = 0, \rho = 0$），麦克斯韦方程组电磁对称：

$$\nabla \times \mathbf{E} = -j\omega\mu\mathbf{H},\quad \nabla \times \mathbf{H} = j\omega\varepsilon\mathbf{E}$$

对偶代换：$\mathbf{E} \to \mathbf{H},\ \mathbf{H} \to -\mathbf{E},\ \varepsilon \to \mu,\ \mu \to \varepsilon$

若已知一个问题解，可通过代换得到对偶问题的解，无需重新求解。

**互易定理（Reciprocity Theorem）：**

两天线系统满足：源与接收点互换后，接收到的信号相同。即天线用作发射和接收时方向图相同。

数学表述：$\int_{V_2} \mathbf{J}_2 \cdot \mathbf{E}_1\mathrm{d}V = \int_{V_1} \mathbf{J}_1 \cdot \mathbf{E}_2\mathrm{d}V$

!!! warning "真题"


    **真题 4.3（来源：2021秋季A卷 二、1）**
    **题目：** 写出麦克斯韦方程组的时域微分形式，并写出无源区域的频域波动方程。

    ??? note "点击查看解答"

        **解：**

        麦克斯韦方程组的时域微分形式：

        $$\nabla\times\mathbf{E} = -\frac{\partial\mathbf{B}}{\partial t}$$

        $$\nabla\times\mathbf{H} = \mathbf{J} + \frac{\partial\mathbf{D}}{\partial t}$$

        $$\nabla\cdot\mathbf{D} = \rho$$

        $$\nabla\cdot\mathbf{B} = 0$$

        无源区域（$\mathbf{J}=0,\;\rho=0$）的频域波动方程：

        $$\nabla^2\mathbf{E} + k^2\mathbf{E} = 0$$

        $$\nabla^2\mathbf{H} + k^2\mathbf{H} = 0$$

        其中 $k = \omega\sqrt{\mu\varepsilon}$。


!!! warning "真题"


    **真题 4.4（来源：2024秋季B卷 一、1）**
    **题目：** 写出微分形式的时谐场 Maxwell 方程组。

    ??? note "点击查看解答"

        **答案：**

        $$\nabla\times\dot{\mathbf{E}} = -j\omega\mu\dot{\mathbf{H}}$$

        $$\nabla\times\dot{\mathbf{H}} = \mathbf{J} + j\omega\varepsilon\dot{\mathbf{E}}$$

        $$\nabla\cdot\mathbf{D} = \rho$$

        $$\nabla\cdot\mathbf{B} = 0$$


!!! warning "真题"


    **真题 4.5（来源：2022秋季B卷 一、2）**
    **题目：** 角频率为 $\omega$ 的时谐电磁场，空间某点处电场强度的复振幅为 $\dot{\mathbf{E}}(\mathbf{r})$、瞬时值为 $\mathbf{E}(\mathbf{r},t)$，磁场强度的复振幅为 $\dot{\mathbf{H}}(\mathbf{r})$、瞬时值为 $\mathbf{H}(\mathbf{r},t)$，则复坡印廷矢量 $\mathbf{S}(\mathbf{r})=$ \_\_\_，平均坡印廷矢量 $\mathbf{S}_{\mathrm{av}}(\mathbf{r})$ 与复坡印廷矢量 $\mathbf{S}(\mathbf{r})$ 的关系是\_\_\_。

    ??? note "点击查看解答"

        **答案：**

        $$\mathbf{S}(\mathbf{r}) = \dot{\mathbf{E}}(\mathbf{r}) \times \dot{\mathbf{H}}^*(\mathbf{r})$$

        $$\mathbf{S}_{\mathrm{av}}(\mathbf{r}) = \frac{1}{2}\operatorname{Re}\!\left[\mathbf{S}(\mathbf{r})\right]$$


!!! warning "真题"


    **真题 4.6（来源：2023秋季A卷 一、1）**
    **题目：** 电位移矢量随时间的变化率为\_\_\_，它被称为位移电流密度。微分形式的麦克斯韦方程组中含该位移电流密度的公式为\_\_\_。

    ??? note "点击查看解答"

        **答案：**

        $$\frac{\partial\mathbf{D}}{\partial t}$$

        $$\nabla\times\mathbf{H} = \mathbf{J} + \frac{\partial\mathbf{D}}{\partial t}$$


!!! warning "真题"


    **真题 4.7（来源：2023春季A卷 一、10）**
    **题目：** 麦克斯韦针对安培环路定理直接应用到时变电磁场时出现的矛盾，提出了位移电流的假说。若真空中的介电常数为 $\varepsilon_0$，电场强度为 $\mathbf{E} = \hat{\mathbf{x}}\,E_0\sin(2\pi f t)\;\text{(V/m)}$，则其位移电流密度为？

    ??? note "点击查看解答"

        **答案：**

        $$\mathbf{J}_d = \varepsilon_0\frac{\partial\mathbf{E}}{\partial t} = \hat{\mathbf{x}}\,2\pi f\varepsilon_0 E_0\cos(2\pi f t)\;\text{(A/m}^2\text{)}$$


!!! warning "真题"


    **真题 4.8（来源：2022春季B卷 三、1）**
    **题目：** $N = 3$ 匝的圆形线圈的半径为 $a = 2\;\text{m}$，其对称中心沿 $z$ 轴放置。沿其对称中心穿过该线圈的磁感应强度为 $\mathbf{B} = 2\cos\!\left(\dfrac{\pi r}{2a}\right)\sin\omega t\;\hat{\mathbf{z}}$，其中 $r$ 为到 $z$ 轴的垂直距离，角频率 $\omega = 10^9\;\text{rad/s}$。求该线圈上产生的感应电动势 $\mathcal{E}$。

    ??? note "点击查看解答"

        **解：**

        穿过单匝线圈的磁通量为：

        $$\Phi = \int_S \mathbf{B}\cdot d\mathbf{S} = \int_0^a 2\cos\!\left(\frac{\pi r}{2a}\right)\sin\omega t \cdot 2\pi r\,\mathrm{d}r$$

        令 $\alpha = \pi/(2a)$，利用积分公式 $\int r\cos(\alpha r)\,\mathrm{d}r = \dfrac{r}{\alpha}\sin(\alpha r) + \dfrac{1}{\alpha^2}\cos(\alpha r)$：

        $$\Phi = 4\pi\sin\omega t \left[\frac{r}{\alpha}\sin(\alpha r) + \frac{1}{\alpha^2}\cos(\alpha r)\right]_0^a = 4\pi\sin\omega t\left(\frac{a}{\alpha} - \frac{1}{\alpha^2}\right)$$

        代入 $\alpha = \pi/(2a)$，$a = 2\;\text{m}$：

        $$\Phi = 4\pi\sin\omega t\left(\frac{2a^2}{\pi} - \frac{4a^2}{\pi^2}\right) = \left(8a^2 - \frac{16a^2}{\pi}\right)\sin\omega t \approx 11.6\sin\omega t \;\text{(Wb)}$$

        $N$ 匝线圈总磁通链 $\pmb{\Psi} = N\Phi$，由法拉第电磁感应定律：

        $$\mathcal{E} = -N\frac{\mathrm{d}\Phi}{\mathrm{d}t} = -3 \times 11.6 \times 10^9 \cos(10^9 t)$$

        $$\boxed{\mathcal{E} = -34.8 \times 10^9 \cos(10^9 t)\;\text{(V)}}$$


!!! warning "真题"


    **真题 4.9（来源：2024秋季B卷 三、1）**
    **题目：** 两块无限大平行理想导体板垂直于 $x$ 轴，$0 < x < d$ 为板间区域，填充空气。已知其间电场为 $\dot{\mathbf{E}} = \hat{\mathbf{y}}\,E_0\sin\!\left(\dfrac{\pi x}{d}\right)e^{-j\beta z}\;\text{(V/m)}$，其中 $\beta = \omega\sqrt{\mu_0\varepsilon_0}$。(1) 求磁场强度 $\dot{\mathbf{H}}$；(2) 将 $\dot{\mathbf{E}}$ 分解为均匀平面波叠加的形式。

    ??? note "点击查看解答"

        **解：**

        **(1) 求磁场强度**

        由 $\nabla\times\dot{\mathbf{E}} = -j\omega\mu_0\dot{\mathbf{H}}$，$\dot{\mathbf{E}}$ 仅有 $y$ 分量：

        $$(\nabla\times\dot{\mathbf{E}})_x = -\frac{\partial \dot{E}_y}{\partial z} = j\beta E_0\sin\!\left(\frac{\pi x}{d}\right)e^{-j\beta z}$$

        $$(\nabla\times\dot{\mathbf{E}})_z = \frac{\partial \dot{E}_y}{\partial x} = \frac{\pi E_0}{d}\cos\!\left(\frac{\pi x}{d}\right)e^{-j\beta z}$$

        因此：

        $$\dot{\mathbf{H}} = -\frac{1}{j\omega\mu_0}\nabla\times\dot{\mathbf{E}} = -\hat{\mathbf{x}}\,\frac{\beta E_0}{\omega\mu_0}\sin\!\left(\frac{\pi x}{d}\right)e^{-j\beta z} + \hat{\mathbf{z}}\,\frac{j\pi E_0}{\omega\mu_0 d}\cos\!\left(\frac{\pi x}{d}\right)e^{-j\beta z}$$

        利用 $\beta/(\omega\mu_0) = 1/\eta_0$（$\eta_0 = \sqrt{\mu_0/\varepsilon_0}$）：

        $$\dot{\mathbf{H}} = -\hat{\mathbf{x}}\,\frac{E_0}{\eta_0}\sin\!\left(\frac{\pi x}{d}\right)e^{-j\beta z} + \hat{\mathbf{z}}\,\frac{j\pi E_0}{\omega\mu_0 d}\cos\!\left(\frac{\pi x}{d}\right)e^{-j\beta z}\;\text{(A/m)}$$

        **(2) 分解为均匀平面波**

        利用 $\sin\!\left(\dfrac{\pi x}{d}\right) = \dfrac{e^{j\pi x/d} - e^{-j\pi x/d}}{2j}$，代入电场：

        $$\dot{\mathbf{E}} = \hat{\mathbf{y}}\,\frac{E_0}{2j}\left(e^{j\pi x/d} - e^{-j\pi x/d}\right)e^{-j\beta z} = \hat{\mathbf{y}}\,\frac{E_0}{2j}e^{-j(\beta z - \pi x/d)} - \hat{\mathbf{y}}\,\frac{E_0}{2j}e^{-j(\beta z + \pi x/d)}$$

        这表示两个均匀平面波的叠加：

        - **波 1**：传播矢量 $\mathbf{k}_1 = -\dfrac{\pi}{d}\hat{\mathbf{x}} + \beta\hat{\mathbf{z}}$，振幅 $\dfrac{E_0}{2j}$
        - **波 2**：传播矢量 $\mathbf{k}_2 = \dfrac{\pi}{d}\hat{\mathbf{x}} + \beta\hat{\mathbf{z}}$，振幅 $-\dfrac{E_0}{2j}$

        两波沿 $z$ 方向有相同的相移常数 $\beta$，沿 $x$ 方向波数大小相等、符号相反，叠加后在 $x$ 方向形成驻波（满足 $x=0$ 和 $x=d$ 处 $E_y=0$ 的导体边界条件）。


!!! warning "真题"


    **真题 4.10（来源：2021秋季B卷 三、1）**
    **题目：** 在两导体平板（$z=0$ 和 $z=a$）之间的空气中传播的电磁波，其电场强度为：

    $$\mathbf{E} = \hat{\mathbf{x}}\,E_0\sin\!\left(\frac{\pi z}{a}\right)\cos(\omega t - \beta y)\;\text{(V/m)}$$

    其中 $E_0$ 为常数。试求：(1) 磁场强度 $\mathbf{H}$；(2) 两导体表面的面电流密度 $\mathbf{J}_s$。

    ??? note "点击查看解答"

        **解：**

        **(1) 求磁场强度**

        电场仅有 $x$ 分量且沿 $y$ 方向传播。由 $\nabla\times\mathbf{E} = -\dfrac{\partial\mathbf{B}}{\partial t}$，复数形式 $\nabla\times\dot{\mathbf{E}} = -j\omega\mu_0\dot{\mathbf{H}}$：

        $$(\nabla\times\dot{\mathbf{E}})_y = \frac{\partial\dot{E}_x}{\partial z} = \frac{\pi E_0}{a}\cos\!\left(\frac{\pi z}{a}\right)e^{-j\beta y}$$

        $$(\nabla\times\dot{\mathbf{E}})_z = -\frac{\partial\dot{E}_x}{\partial y} = j\beta E_0\sin\!\left(\frac{\pi z}{a}\right)e^{-j\beta y}$$

        因此：

        $$\dot{\mathbf{H}} = -\frac{1}{j\omega\mu_0}\nabla\times\dot{\mathbf{E}} = -\hat{\mathbf{y}}\,\frac{j\beta E_0}{\omega\mu_0}\sin\!\left(\frac{\pi z}{a}\right)e^{-j\beta y} + \hat{\mathbf{z}}\,\frac{\pi E_0}{j\omega\mu_0 a}\cos\!\left(\frac{\pi z}{a}\right)e^{-j\beta y}$$

        利用 $\beta/(\omega\mu_0) = 1/\eta_0$：

        $$\dot{\mathbf{H}} = -\hat{\mathbf{y}}\,\frac{E_0}{\eta_0}\sin\!\left(\frac{\pi z}{a}\right)e^{-j\beta y} - \hat{\mathbf{z}}\,\frac{j\pi E_0}{\omega\mu_0 a}\cos\!\left(\frac{\pi z}{a}\right)e^{-j\beta y}\;\text{(A/m)}$$

        **(2) 面电流密度**

        在 $z=0$ 表面，$\hat{\mathbf{n}} = -\hat{\mathbf{z}}$：

        $$\mathbf{J}_s\big|_{z=0} = \hat{\mathbf{n}}\times\dot{\mathbf{H}}\big|_{z=0} = -\hat{\mathbf{z}}\times\left[-\hat{\mathbf{y}}\,\frac{E_0}{\eta_0}\cdot0 - \hat{\mathbf{z}}\,\frac{j\pi E_0}{\omega\mu_0 a}\right] = -\hat{\mathbf{x}}\,\frac{j\pi E_0}{\omega\mu_0 a}\;\text{(A/m)}$$

        在 $z=a$ 表面，$\hat{\mathbf{n}} = \hat{\mathbf{z}}$：

        $$\mathbf{J}_s\big|_{z=a} = \hat{\mathbf{z}}\times\left[-\hat{\mathbf{y}}\,\frac{E_0}{\eta_0}\cdot0\right] = \hat{\mathbf{x}}\,\frac{j\pi E_0}{\omega\mu_0 a}\;\text{(A/m)}$$

        （注：$z=0$ 和 $z=a$ 处 $\sin(\pi z/a)=0$，故 $H_y=0$，面电流仅由 $H_z$ 贡献。）


!!! warning "真题"


    **真题 4.11（来源：2023春季A卷 三、1）**
    **题目：** 已知无源自由空间的电场强度矢量 $\mathbf{E} = \hat{\mathbf{x}}\,E_0\sin(\omega t - kx)$。

    (1) 试由麦克斯韦方程求磁场强度的瞬时表示式；
    (2) 证明 $\omega/k$ 等于光速 $c$；
    (3) 试求坡印廷矢量的时间平均值。

    ??? note "点击查看解答"

        **解：**

        **(1) 求磁场强度**

        电场复数表示式：$\dot{\mathbf{E}} = \hat{\mathbf{x}}\,E_0 e^{-jkx}$（以正弦为基准）

        由 $\nabla\times\dot{\mathbf{E}} = -j\omega\mu_0\dot{\mathbf{H}}$：

        $$\nabla\times\dot{\mathbf{E}} = -\hat{\mathbf{z}}\,\frac{\partial\dot{E}_x}{\partial x} = \hat{\mathbf{z}}\,jkE_0 e^{-jkx}$$

        $$\dot{\mathbf{H}} = -\frac{1}{j\omega\mu_0}\hat{\mathbf{z}}\,jkE_0 e^{-jkx} = -\hat{\mathbf{z}}\,\frac{kE_0}{\omega\mu_0}e^{-jkx}$$

        转为瞬时形式（以正弦为基准）：

        $$\mathbf{H} = -\hat{\mathbf{z}}\,\frac{kE_0}{\omega\mu_0}\sin(\omega t - kx)\;\text{(A/m)}$$

        **(2) 证明 $\omega/k = c$**

        在自由空间中，由 $\nabla\times\dot{\mathbf{H}} = j\omega\varepsilon_0\dot{\mathbf{E}}$：

        $$\nabla\times\dot{\mathbf{H}} = \hat{\mathbf{x}}\,\frac{\partial\dot{H}_z}{\partial y} - \hat{\mathbf{y}}\,\frac{\partial\dot{H}_z}{\partial x} = -\hat{\mathbf{y}}\,\left(-\frac{k^2 E_0}{\omega\mu_0}\right)e^{-jkx} = \hat{\mathbf{y}}\,\frac{k^2 E_0}{\omega\mu_0}e^{-jkx}$$

        由 $j\omega\varepsilon_0\dot{\mathbf{E}} = \hat{\mathbf{y}}\cdot0$（$\dot{\mathbf{E}}$ 仅有 $x$ 分量），但实际上 $\nabla\times\dot{\mathbf{H}}$ 的 $y$ 分量应等于 $j\omega\varepsilon_0\dot{E}_y = 0$，这里需要重新审视。

        正确方法：$\nabla\times\dot{\mathbf{H}}$ 的 $y$ 分量为 $\dfrac{\partial\dot{H}_x}{\partial z} - \dfrac{\partial\dot{H}_z}{\partial x}$。$\dot{\mathbf{H}}$ 仅有 $z$ 分量：

        $$(\nabla\times\dot{\mathbf{H}})_y = -\frac{\partial\dot{H}_z}{\partial x} = -\frac{k^2 E_0}{\omega\mu_0}(-j)e^{-jkx} \cdot (-1) = \frac{jk^2 E_0}{\omega\mu_0}e^{-jkx}$$

        而 $j\omega\varepsilon_0\dot{E}_y = 0$，因此需要满足 $\dfrac{k^2}{\omega\mu_0} = \omega\varepsilon_0$，即：

        $$\frac{\omega^2}{k^2} = \frac{1}{\mu_0\varepsilon_0} = c^2 \quad\Rightarrow\quad \frac{\omega}{k} = c$$

        **(3) 坡印廷矢量平均值**

        $$\mathbf{S}_{\mathrm{av}} = \frac{1}{2}\operatorname{Re}\!\left[\dot{\mathbf{E}}\times\dot{\mathbf{H}}^*\right] = \frac{1}{2}\operatorname{Re}\!\left[\hat{\mathbf{x}}\,E_0 e^{-jkx}\times\left(-\hat{\mathbf{z}}\,\frac{kE_0}{\omega\mu_0}e^{-jkx}\right)^*\right]$$

        $$= \frac{1}{2}\hat{\mathbf{y}}\,\frac{kE_0^2}{\omega\mu_0} = \hat{\mathbf{y}}\,\frac{kE_0^2}{2\omega\mu_0}\;\text{(W/m}^2\text{)}$$

        利用 $\omega/k = c$ 和 $\eta_0 = \sqrt{\mu_0/\varepsilon_0}$：

        $$\mathbf{S}_{\mathrm{av}} = \hat{\mathbf{y}}\,\frac{E_0^2}{2\eta_0}\;\text{(W/m}^2\text{)}$$


!!! warning "真题"


    **真题 4.12（来源：2023秋季B卷 三、3）**
    **题目：** 一均匀平面波沿 $+z$ 方向传播，其电场强度矢量为：

    $$\mathbf{E}(z,t) = \hat{\mathbf{x}}\,E_0\sin(\omega t - \beta z) + \hat{\mathbf{y}}\,2E_0\cos(\omega t - \beta z)\;\text{(V/m)}$$

    (1) 应用麦克斯韦方程组求磁场 $\mathbf{H}(z,t)$；
    (2) 若在波传播方向上 $z=0$ 处放置一无限大的理想导体板，求 $z<0$ 区域中的合成波电场 $\dot{\mathbf{E}}(z)$ 和磁场 $\dot{\mathbf{H}}(z)$；
    (3) 求理想导体板表面的电流密度。

    ??? note "点击查看解答"

        **解：**

        **(1) 求磁场**

        复数形式：$\dot{\mathbf{E}} = \hat{\mathbf{x}}\,E_0(-j)e^{-j\beta z} + \hat{\mathbf{y}}\,2E_0\,e^{-j\beta z}$（以余弦为基准）

        由 $\nabla\times\dot{\mathbf{E}} = -j\omega\mu_0\dot{\mathbf{H}}$：

        $$(\nabla\times\dot{\mathbf{E}})_y = -\frac{\partial\dot{E}_x}{\partial z} = -j\beta\cdot(-j)E_0\,e^{-j\beta z} = -\beta E_0\,e^{-j\beta z}$$

        $$(\nabla\times\dot{\mathbf{E}})_x = \frac{\partial\dot{E}_y}{\partial z} = -j\beta\cdot2E_0\,e^{-j\beta z}$$

        $$\dot{\mathbf{H}} = \frac{1}{j\omega\mu_0}\left[\hat{\mathbf{x}}\,j\beta\cdot2E_0\,e^{-j\beta z} + \hat{\mathbf{y}}\,\beta E_0\,e^{-j\beta z}\right] = \hat{\mathbf{x}}\,\frac{2E_0}{\eta_0}e^{-j\beta z} - \hat{\mathbf{y}}\,\frac{jE_0}{\eta_0}e^{-j\beta z}$$

        瞬时形式：

        $$\mathbf{H}(z,t) = \hat{\mathbf{x}}\,\frac{2E_0}{\eta_0}\cos(\omega t - \beta z) - \hat{\mathbf{y}}\,\frac{E_0}{\eta_0}\sin(\omega t - \beta z)\;\text{(A/m)}$$

        **(2) 合成波（$z<0$ 区域）**

        垂直入射理想导体，反射系数 $\Gamma = -1$。反射波：

        $$\dot{\mathbf{E}}^r = -\hat{\mathbf{x}}\,(-j)E_0\,e^{j\beta z} - \hat{\mathbf{y}}\,2E_0\,e^{j\beta z} = \hat{\mathbf{x}}\,jE_0\,e^{j\beta z} - \hat{\mathbf{y}}\,2E_0\,e^{j\beta z}$$

        合成波电场：

        $$\dot{\mathbf{E}} = \dot{\mathbf{E}}^i + \dot{\mathbf{E}}^r = \hat{\mathbf{x}}\,(-j)E_0(e^{-j\beta z} - e^{j\beta z}) + \hat{\mathbf{y}}\,2E_0(e^{-j\beta z} - e^{j\beta z})$$

        $$= -\hat{\mathbf{x}}\,2E_0\sin\beta z - \hat{\mathbf{y}}\,j\,4E_0\sin\beta z$$

        合成波磁场（反射波磁场取反号）：

        $$\dot{\mathbf{H}} = \hat{\mathbf{x}}\,\frac{2E_0}{\eta_0}(e^{-j\beta z} + e^{j\beta z}) - \hat{\mathbf{y}}\,\frac{jE_0}{\eta_0}(e^{-j\beta z} + e^{j\beta z}) = \hat{\mathbf{x}}\,\frac{4E_0}{\eta_0}\cos\beta z - \hat{\mathbf{y}}\,\frac{j\,2E_0}{\eta_0}\cos\beta z$$

        **(3) 导体板表面电流密度**

        在 $z=0$ 处，$\hat{\mathbf{n}} = \hat{\mathbf{z}}$（导体法向 $+z$），$\dot{\mathbf{H}}|_{z=0} = \hat{\mathbf{x}}\,\dfrac{4E_0}{\eta_0} - \hat{\mathbf{y}}\,\dfrac{j\,2E_0}{\eta_0}$：

        $$\mathbf{J}_s = \hat{\mathbf{n}}\times\dot{\mathbf{H}}\big|_{z=0} = \hat{\mathbf{z}}\times\left(\hat{\mathbf{x}}\,\frac{4E_0}{\eta_0} - \hat{\mathbf{y}}\,\frac{j\,2E_0}{\eta_0}\right) = \hat{\mathbf{y}}\,\frac{4E_0}{\eta_0} + \hat{\mathbf{x}}\,\frac{j\,2E_0}{\eta_0}\;\text{(A/m)}$$


!!! warning "真题"


    **真题 4.13（来源：2022春季A卷 三、3）**
    **题目：** 在间距为 $d$ 的两无限大导电平板之间充满空气，其中电场强度为：

    $$\mathbf{E}(x,z,t) = \hat{\mathbf{y}}\,E_0\sin\!\left(\frac{\pi x}{d}\right)\cos(\omega t - \beta z)\;\text{(V/m)}$$

    $\beta$ 为常数。求：(1) 与 $\mathbf{E}$ 相伴的磁场强度 $\mathbf{H}(x,z,t)$；(2) 两导体平板表面上的面电荷密度 $\rho_s$ 和面电流密度 $\mathbf{J}_s$。

    ??? note "点击查看解答"

        **解：**

        **(1) 求磁场强度**

        由 $\nabla\times\mathbf{E} = -\mu_0\dfrac{\partial\mathbf{H}}{\partial t}$，电场仅有 $y$ 分量：

        $$(\nabla\times\mathbf{E})_x = -\frac{\partial E_y}{\partial z} = -\beta E_0\sin\!\left(\frac{\pi x}{d}\right)\sin(\omega t - \beta z)$$

        $$(\nabla\times\mathbf{E})_z = \frac{\partial E_y}{\partial x} = \frac{\pi E_0}{d}\cos\!\left(\frac{\pi x}{d}\right)\cos(\omega t - \beta z)$$

        对时间积分得磁场：

        $$H_x = -\frac{1}{\mu_0}\int(\nabla\times\mathbf{E})_x\,dt = -\frac{\beta E_0}{\omega\mu_0}\sin\!\left(\frac{\pi x}{d}\right)\cos(\omega t - \beta z)$$

        $$H_z = -\frac{1}{\mu_0}\int(\nabla\times\mathbf{E})_z\,dt = -\frac{\pi E_0}{\omega\mu_0 d}\cos\!\left(\frac{\pi x}{d}\right)\sin(\omega t - \beta z)$$

        因此：

        $$\mathbf{H}(x,z,t) = -\hat{\mathbf{x}}\,\frac{\beta E_0}{\omega\mu_0}\sin\!\left(\frac{\pi x}{d}\right)\cos(\omega t - \beta z) - \hat{\mathbf{z}}\,\frac{\pi E_0}{\omega\mu_0 d}\cos\!\left(\frac{\pi x}{d}\right)\sin(\omega t - \beta z)\;\text{(A/m)}$$

        利用 $\beta/(\omega\mu_0) = 1/\eta_0\cdot\beta/k$（$k=\omega/c$）：

        $$\mathbf{H} = -\hat{\mathbf{x}}\,\frac{E_0}{\eta_0}\cdot\frac{\beta}{k}\sin\!\left(\frac{\pi x}{d}\right)\cos(\omega t - \beta z) - \hat{\mathbf{z}}\,\frac{\pi E_0}{\omega\mu_0 d}\cos\!\left(\frac{\pi x}{d}\right)\sin(\omega t - \beta z)\;\text{(A/m)}$$

        **(2) 面电荷密度和面电流密度**

        在 $x=0$ 表面，$\hat{\mathbf{n}} = -\hat{\mathbf{x}}$：

        面电荷密度：$E_n\big|_{x=0} = E_x\big|_{x=0} = 0$（电场只有 $y$ 分量，无法向分量）

        $$\rho_s\big|_{x=0} = \varepsilon_0 E_n = 0$$

        面电流密度：$\mathbf{J}_s = \hat{\mathbf{n}}\times\mathbf{H}\big|_{x=0}$

        在 $x=0$ 处，$\sin(0) = 0$，$\cos(0) = 1$：

        $$\mathbf{H}\big|_{x=0} = -\hat{\mathbf{z}}\,\frac{\pi E_0}{\omega\mu_0 d}\sin(\omega t - \beta z)$$

        $$\mathbf{J}_s\big|_{x=0} = (-\hat{\mathbf{x}})\times\left[-\hat{\mathbf{z}}\,\frac{\pi E_0}{\omega\mu_0 d}\sin(\omega t - \beta z)\right] = -\hat{\mathbf{y}}\,\frac{\pi E_0}{\omega\mu_0 d}\sin(\omega t - \beta z)\;\text{(A/m)}$$

        在 $x=d$ 表面，$\hat{\mathbf{n}} = \hat{\mathbf{x}}$：

        在 $x=d$ 处，$\sin(\pi) = 0$，$\cos(\pi) = -1$：

        $$\mathbf{H}\big|_{x=d} = \hat{\mathbf{z}}\,\frac{\pi E_0}{\omega\mu_0 d}\sin(\omega t - \beta z)$$

        $$\mathbf{J}_s\big|_{x=d} = \hat{\mathbf{x}}\times\left[\hat{\mathbf{z}}\,\frac{\pi E_0}{\omega\mu_0 d}\sin(\omega t - \beta z)\right] = -\hat{\mathbf{y}}\,\frac{\pi E_0}{\omega\mu_0 d}\sin(\omega t - \beta z)\;\text{(A/m)}$$

        两板面电荷密度均为零（电场平行于导体表面，无法向分量），面电流方向相同。


!!! warning "真题"


    **真题 4.14（来源：2022春季B卷 三、1）**
    **题目：** $N = 3$ 匝的圆形线圈的半径为 $b = 2\;\text{m}$，其对称中心沿 $z$ 轴放置。沿其对称中心穿过该线圈的磁感应强度为 $\mathbf{B} = 2\cos\!\left(\dfrac{\pi r}{2b}\right)\sin\omega t\;\hat{\mathbf{z}}$。其中，角频率 $\omega = 10^9\;\text{Hz}$。求该线圈上产生的感应电动势 $V_{\text{感应}}$。

    ??? note "点击查看解答"

        **解：**

        由法拉第电磁感应定律：

        $$V_{\text{感应}} = -N\frac{d\Phi}{dt}$$

        磁通量：

        $$\Phi = \int_S \mathbf{B}\cdot d\mathbf{S} = \int_0^b 2\cos\!\left(\frac{\pi r}{2b}\right)\sin\omega t\cdot 2\pi r\,dr$$

        $$= 4\pi\sin\omega t\int_0^b r\cos\!\left(\frac{\pi r}{2b}\right)dr$$

        令 $u = \dfrac{\pi r}{2b}$，则 $r = \dfrac{2bu}{\pi}$，$dr = \dfrac{2b}{\pi}du$：

        $$\int_0^b r\cos\!\left(\frac{\pi r}{2b}\right)dr = \frac{4b^2}{\pi^2}\int_0^{\pi/2} u\cos u\,du$$

        利用分部积分：$\int u\cos u\,du = u\sin u + \cos u$

        $$\int_0^{\pi/2} u\cos u\,du = \left[u\sin u + \cos u\right]_0^{\pi/2} = \frac{\pi}{2}\cdot1 + 0 - (0 + 1) = \frac{\pi}{2} - 1$$

        因此：

        $$\Phi = 4\pi\sin\omega t\cdot\frac{4b^2}{\pi^2}\left(\frac{\pi}{2} - 1\right) = \frac{16b^2}{\pi}\left(\frac{\pi}{2} - 1\right)\sin\omega t$$

        代入 $b = 2\;\text{m}$：

        $$\Phi = \frac{16\times4}{\pi}\left(\frac{\pi}{2} - 1\right)\sin\omega t = \frac{64}{\pi}\left(\frac{\pi}{2} - 1\right)\sin\omega t$$

        感应电动势：

        $$V_{\text{感应}} = -N\frac{d\Phi}{dt} = -3\cdot\frac{64}{\pi}\left(\frac{\pi}{2} - 1\right)\omega\cos\omega t$$

        代入 $\omega = 10^9\;\text{rad/s}$：

        $$V_{\text{感应}} = -\frac{192\times10^9}{\pi}\left(\frac{\pi}{2} - 1\right)\cos(10^9 t)\;\text{(V)}$$

        $$\approx -\frac{192\times10^9\times0.571}{3.1416}\cos(10^9 t) \approx -3.49\times10^{10}\cos(10^9 t)\;\text{(V)}$$


---

[← 上一章: 第3章 静态电磁场及其解法](../03-静态电磁场及其解法/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第5章 均匀平面波](../05-均匀平面波/index.md)
