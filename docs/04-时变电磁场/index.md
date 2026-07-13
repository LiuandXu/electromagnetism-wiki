# 第4章 时变电磁场

## 课件下载
[📄 09时变电磁场1-波动方程-位函数](../课程资料/09时变电磁场1-波动方程-位函数.pdf)
[📄 10时变电磁场2-时谐场](../课程资料/10时变电磁场2-时谐场.pdf)
[📄 11时变电磁场3-电磁能量守恒定律](../课程资料/11时变电磁场3-电磁能量守恒定律.pdf)
[📄 12时变电磁场4-基本电磁定律](../课程资料/12时变电磁场4-基本电磁定律.pdf)

## 课程内容

### 4.1 波动方程

从麦克斯韦方程组出发，可导出电磁场的波动方程，揭示电磁波的传播本质。

在无源区域（$\rho = 0, \mathbf{J} = 0$）：

$$\nabla \times (\nabla \times \mathbf{E}) = \nabla \times \left(-\frac{\partial \mathbf{B}}{\partial t}\right) = -\mu\frac{\partial}{\partial t}(\nabla \times \mathbf{H}) = -\mu\varepsilon\frac{\partial^2 \mathbf{E}}{\partial t^2}$$

利用 $\nabla \times \nabla \times \mathbf{E} = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$，且无源区域 $\nabla \cdot \mathbf{E} = 0$：

$$\nabla^2 \mathbf{E} - \mu\varepsilon\frac{\partial^2 \mathbf{E}}{\partial t^2} = 0$$

$$\nabla^2 \mathbf{H} - \mu\varepsilon\frac{\partial^2 \mathbf{H}}{\partial t^2} = 0$$

**波速：** $v = \frac{1}{\sqrt{\mu\varepsilon}}$，真空中 $c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3 \times 10^8\,\mathrm{m/s}$

这一结果揭示了光是电磁波的本质。

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

### 4.5 基本电磁定律 — 对偶原理与互易定理

**对偶原理（Duality Principle）：**

在无源区域（$\mathbf{J} = 0, \rho = 0$），麦克斯韦方程组电磁对称：

$$\nabla \times \mathbf{E} = -j\omega\mu\mathbf{H},\quad \nabla \times \mathbf{H} = j\omega\varepsilon\mathbf{E}$$

对偶代换：$\mathbf{E} \to \mathbf{H},\ \mathbf{H} \to -\mathbf{E},\ \varepsilon \to \mu,\ \mu \to \varepsilon$

若已知一个问题解，可通过代换得到对偶问题的解，无需重新求解。

**互易定理（Reciprocity Theorem）：**

两天线系统满足：源与接收点互换后，接收到的信号相同。即天线用作发射和接收时方向图相同。

数学表述：$\int_{V_2} \mathbf{J}_2 \cdot \mathbf{E}_1\mathrm{d}V = \int_{V_1} \mathbf{J}_1 \cdot \mathbf{E}_2\mathrm{d}V$

---

[← 上一章: 第3章 静态电磁场及其解法](../03-静态电磁场及其解法/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第5章 均匀平面波](../05-均匀平面波/index.md)
