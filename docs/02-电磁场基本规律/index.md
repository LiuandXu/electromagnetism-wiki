# 第2章 电磁场基本规律

### 2.1 电荷守恒定律

电荷守恒定律是电磁理论的基本定律之一，表述为：在任何物理过程中，电荷既不能被创造也不能被消灭。

**积分形式（电流连续性方程）：**

$$\oint_S \mathbf{J} \cdot \mathrm{d}\mathbf{S} = -\frac{\mathrm{d}Q}{\mathrm{d}t} = -\int_V \frac{\partial \rho}{\partial t}\mathrm{d}V$$

物理意义：流出闭合曲面的总电流等于闭合面内电荷减少率。

**微分形式：**

$$\nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0$$

恒定电流（稳态）条件：$\nabla \cdot \mathbf{J} = 0$，即基尔霍夫电流定律（KCL）的场论表述。

### 2.2 真空中静电场的基本规律

**库仑定律（Coulomb's Law）：**

真空中两个静止点电荷之间的作用力：

$$\mathbf{F}_{12} = \frac{q_1 q_2}{4\pi\varepsilon_0 R^2}\hat{\mathbf{R}}_{12}$$

其中 $\varepsilon_0 = 8.854 \times 10^{-12}\,\mathrm{F/m}$ 为真空介电常数。

对于多个点电荷系统，满足叠加原理。

**电场强度定义：**

$$\mathbf{E} = \frac{\mathbf{F}}{q} = \frac{q}{4\pi\varepsilon_0 R^2}\hat{\mathbf{R}}$$

点电荷 $q$ 在空间中产生的电场具有球对称性。

**高斯定律（Gauss's Law）：**

积分形式：$\oint_S \mathbf{D} \cdot \mathrm{d}\mathbf{S} = Q$

微分形式：$\nabla \cdot \mathbf{D} = \rho$

真空中：$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$

应用：对称性分布电荷（球对称、柱对称、面对称）的电场计算。

**静电场的无旋性：**

$$\nabla \times \mathbf{E} = 0$$

$$\oint_C \mathbf{E} \cdot \mathrm{d}\mathbf{l} = 0$$

静电场是保守场（无旋场），可定义电位函数 $V$：
$$\mathbf{E} = -\nabla V$$
$$V_{ab} = V_a - V_b = \int_a^b \mathbf{E} \cdot \mathrm{d}\mathbf{l}$$

### 2.3 真空中恒定磁场的基本规律

**安培力定律：**

两个电流回路之间的磁力由安培力定律描述，是恒定磁场的基本实验定律。

**毕奥-萨伐尔定律（Biot-Savart Law）：**

线电流 $I$ 在空间点产生的磁感应强度：

$$\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int_C \frac{I\mathrm{d}\mathbf{l}' \times \hat{\mathbf{R}}}{R^2}$$

其中 $\mu_0 = 4\pi \times 10^{-7}\,\mathrm{H/m}$ 为真空磁导率。

体电流分布：$\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int_V \frac{\mathbf{J}(\mathbf{r}') \times \hat{\mathbf{R}}}{R^2}\mathrm{d}V'$

**恒定磁场的散度与旋度：**

$$\nabla \cdot \mathbf{B} = 0 \quad (\text{磁通连续性原理})$$

$$\oint_S \mathbf{B} \cdot \mathrm{d}\mathbf{S} = 0 \quad (\text{磁场是无源场})$$

$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$$

$$\oint_C \mathbf{B} \cdot \mathrm{d}\mathbf{l} = \mu_0 I \quad (\text{安培环路定律})$$

磁场是有旋无散场，不存在"磁荷"（磁单极子）。

### 2.4 媒质的电磁特性

#### 2.4.1 电介质的极化

在外电场作用下，电介质中的束缚电荷发生微观位移，形成电偶极矩，宏观上表现为极化。

**极化强度 $\mathbf{P}$**：单位体积内的电偶极矩（$\mathrm{C/m^2}$）

**电位移矢量：** $\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P}$

对于线性各向同性介质：
$$\mathbf{P} = \varepsilon_0 \chi_e \mathbf{E}$$
$$\mathbf{D} = \varepsilon_0(1 + \chi_e)\mathbf{E} = \varepsilon_0 \varepsilon_r \mathbf{E} = \varepsilon \mathbf{E}$$

其中 $\chi_e$ 为电极化率，$\varepsilon_r = 1 + \chi_e$ 为相对介电常数，$\varepsilon = \varepsilon_0\varepsilon_r$ 为介电常数。

**束缚电荷：**
- 体束缚电荷密度：$\rho_p = -\nabla \cdot \mathbf{P}$
- 面束缚电荷密度：$\rho_{sp} = \mathbf{P} \cdot \hat{\mathbf{n}}$

#### 2.4.2 磁介质的磁化

在外磁场作用下，磁介质中的分子磁矩取向排列，宏观上表现为磁化。

**磁化强度 $\mathbf{M}$**：单位体积内的磁偶极矩（$\mathrm{A/m}$）

**磁场强度：** $\mathbf{H} = \frac{\mathbf{B}}{\mu_0} - \mathbf{M}$

对于线性各向同性磁介质：
$$\mathbf{M} = \chi_m \mathbf{H}$$
$$\mathbf{B} = \mu_0(1 + \chi_m)\mathbf{H} = \mu_0\mu_r\mathbf{H} = \mu\mathbf{H}$$

其中 $\chi_m$ 为磁化率，$\mu_r = 1 + \chi_m$ 为相对磁导率。

**磁介质分类：**
- 抗磁性（$\chi_m < 0$，$\mu_r < 1$）：如铜、水
- 顺磁性（$\chi_m > 0$，$\mu_r > 1$）：如铝、空气
- 铁磁性（$\chi_m \gg 0$，$\mu_r \gg 1$）：如铁、钴、镍

#### 2.4.3 导电媒质的欧姆定律

$$\mathbf{J} = \sigma \mathbf{E}$$

其中 $\sigma$ 为电导率（$\mathrm{S/m}$）。

### 2.5 法拉第电磁感应定律

**法拉第实验发现：** 通过回路的磁通量发生变化时，回路中产生感应电动势。

**积分形式：**

$$\mathcal{E} = \oint_C \mathbf{E} \cdot \mathrm{d}\mathbf{l} = -\frac{\mathrm{d}\Phi}{\mathrm{d}t} = -\frac{\mathrm{d}}{\mathrm{d}t}\int_S \mathbf{B} \cdot \mathrm{d}\mathbf{S}$$

**微分形式：**

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$

**物理意义：**
- 变化的磁场产生有旋电场（涡旋电场）
- 负号表示感应电场的方向总是阻碍磁通量的变化（楞次定律）
- 这是变压器、发电机、感应电机的工作原理基础

### 2.6 麦克斯韦方程组（Maxwell's Equations）

**位移电流假设：** 麦克斯韦引入位移电流密度 $\mathbf{J}_d = \frac{\partial \mathbf{D}}{\partial t}$，将安培环路定律推广到时变场。

**微分形式：**

| 方程 | 表达式 | 物理意义 |
|------|--------|---------|
| 全电流定律 | $\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}$ | 传导电流和位移电流都产生磁场 |
| 法拉第定律 | $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ | 时变磁场产生电场 |
| 高斯定律 | $\nabla \cdot \mathbf{D} = \rho$ | 电荷是电场的源 |
| 磁通连续性 | $\nabla \cdot \mathbf{B} = 0$ | 不存在磁荷 |

**本构关系（辅助方程）：**
$$\mathbf{D} = \varepsilon \mathbf{E},\quad \mathbf{B} = \mu \mathbf{H},\quad \mathbf{J} = \sigma \mathbf{E}$$

麦克斯韦方程组预言了电磁波的存在，并指出光是一种电磁波。

**例题：**

**例题 2.1**
**题目：** 在无源自由空间，已知磁场强度为 $\mathbf{H} = \hat{\mathbf{y}}\,2.63\times10^7\cos(3\times10^9 t - 10z)$（A/m），求位移电流密度 $\mathbf{J}_d$。

**解：**

由于是无源空间，传导电流 $\mathbf{J} = 0$，由安培环路定律：

$$\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t} = \mathbf{J}_d$$

计算旋度（$\mathbf{H}$ 仅有 $y$ 分量且只与 $z$、$t$ 有关）：

$$\nabla \times \mathbf{H} = -\frac{\partial H_y}{\partial z}\hat{\mathbf{x}}$$

$$\frac{\partial H_y}{\partial z} = 2.63\times10^7 \cdot 10\sin(3\times10^9 t - 10z) = 2.63\times10^8\sin(3\times10^9 t - 10z)$$

因此位移电流密度为：

$$\mathbf{J}_d = -\hat{\mathbf{x}}\,2.63\times10^8\sin(3\times10^9 t - 10z) \quad (\text{A/m}^2)$$

**真题：**

**真题 2.1（来源：2024春季B卷）**
**题目：** 在金属铜中，电场强度为 $\mathbf{E} = \hat{\mathbf{x}} E_0 \sin(\omega t)$（V/m），铜的电导率为 $\sigma$、介电常数为 $\varepsilon$。求铜中的传导电流密度和位移电流密度。

**解：**

**传导电流密度**由欧姆定律给出：

$$\mathbf{J}_c = \sigma \mathbf{E} = \hat{\mathbf{x}}\, \sigma E_0 \sin(\omega t) \quad (\text{A/m}^2)$$

**位移电流密度**由电位移矢量随时间的变化率定义：

$$\mathbf{J}_d = \frac{\partial \mathbf{D}}{\partial t} = \varepsilon \frac{\partial \mathbf{E}}{\partial t} = \hat{\mathbf{x}}\, \varepsilon \omega E_0 \cos(\omega t) \quad (\text{A/m}^2)$$

可见传导电流与电场同相位，而位移电流超前电场 $90°$。两者之比为 $|\mathbf{J}_c| / |\mathbf{J}_d| = \sigma / (\omega \varepsilon)$，在良导体中 $\sigma \gg \omega \varepsilon$，传导电流远大于位移电流。

### 2.7 电磁场的边界条件

在不同媒质的分界面上，场量可能不连续，满足以下边界条件。

**一般边界条件：**
- $\hat{\mathbf{n}} \times (\mathbf{E}_1 - \mathbf{E}_2) = 0$（切向 $\mathbf{E}$ 连续）
- $\hat{\mathbf{n}} \cdot (\mathbf{D}_1 - \mathbf{D}_2) = \rho_s$（法向 $\mathbf{D}$ 突变等于面电荷密度）
- $\hat{\mathbf{n}} \times (\mathbf{H}_1 - \mathbf{H}_2) = \mathbf{J}_s$（切向 $\mathbf{H}$ 突变等于面电流密度）
- $\hat{\mathbf{n}} \cdot (\mathbf{B}_1 - \mathbf{B}_2) = 0$（法向 $\mathbf{B}$ 连续）

**理想导体表面（$\sigma \to \infty$）：**
- $\hat{\mathbf{n}} \times \mathbf{E} = 0$（切向电场为零）
- $\hat{\mathbf{n}} \cdot \mathbf{B} = 0$（法向磁场为零）
- $\hat{\mathbf{n}} \cdot \mathbf{D} = \rho_s$（表面电荷）
- $\hat{\mathbf{n}} \times \mathbf{H} = \mathbf{J}_s$（表面电流）

**两种理想介质分界面（$\rho_s = 0, \mathbf{J}_s = 0$）：**
- $\mathbf{E}_{1t} = \mathbf{E}_{2t}$，$D_{1n} = D_{2n}$
- $\mathbf{H}_{1t} = \mathbf{H}_{2t}$，$B_{1n} = B_{2n}$

**例题：**

**例题 2.2**
**题目：** 设 $z=0$ 的平面为空气与理想导体的分界面，$z<0$ 一侧为理想导体。分界面处磁场强度为 $\mathbf{H} = \hat{\mathbf{y}}\,H_0\sin(\alpha x)\cos(\omega t - \beta y)$，求导体上的面电流分布。

**解：**

首先确定单位法向矢量 $\hat{\mathbf{n}} = \hat{\mathbf{z}}$（由导体指向空气）。

由理想导体表面边界条件 $\mathbf{J}_s = \hat{\mathbf{n}} \times \mathbf{H}$：

$$\mathbf{J}_s = \hat{\mathbf{z}} \times [\hat{\mathbf{y}}\,H_0\sin(\alpha x)\cos(\omega t - \beta y)]$$

$$= H_0\sin(\alpha x)\cos(\omega t - \beta y)\,(\hat{\mathbf{z}} \times \hat{\mathbf{y}})$$

$$= -\hat{\mathbf{x}}\,H_0\sin(\alpha x)\cos(\omega t - \beta y) \quad (\text{A/m})$$

**例题 2.3**
**题目：** 间距 $d$ 的两无限大导电板间为空气，其中电场强度为 $\mathbf{E} = \hat{\mathbf{x}}\,E_0\cos(\omega t - \beta z)$。求两导电平板表面上的面电荷密度和面电流密度。

**解：**

**(1) 面电荷密度**

由边界条件 $\rho_s = \hat{\mathbf{n}} \cdot \mathbf{D} = \varepsilon_0\,E_0\cos(\omega t - \beta z)$。

下壁（$x = 0$），法向 $\hat{\mathbf{n}} = +\hat{\mathbf{x}}$：

$$\rho_s = \varepsilon_0 E_0\cos(\omega t - \beta z)$$

上壁（$x = d$），法向 $\hat{\mathbf{n}} = -\hat{\mathbf{x}}$：

$$\rho_s = -\varepsilon_0 E_0\cos(\omega t - \beta z)$$

上下壁电荷大小相等，下壁为正电荷、上壁为负电荷。

**(2) 面电流密度**

由 $\nabla \times \mathbf{E} = -\dfrac{\partial \mathbf{B}}{\partial t}$ 可得 $\mathbf{H}$，其中自由空间 $\dfrac{\beta}{\omega\mu_0} = \dfrac{1}{\eta_0}$（$\eta_0 = \sqrt{\mu_0/\varepsilon_0}$）：

$$\mathbf{H} = \hat{\mathbf{y}}\,\frac{E_0}{\eta_0}\cos(\omega t - \beta z)$$

由边界条件 $\mathbf{J}_s = \hat{\mathbf{n}} \times \mathbf{H}$：

下壁（$x = 0$）：$\mathbf{J}_s = \hat{\mathbf{x}} \times \hat{\mathbf{y}}\,\dfrac{E_0}{\eta_0}\cos(\omega t - \beta z) = \hat{\mathbf{z}}\,\dfrac{E_0}{\eta_0}\cos(\omega t - \beta z)$

上壁（$x = d$）：$\mathbf{J}_s = -\hat{\mathbf{x}} \times \hat{\mathbf{y}}\,\dfrac{E_0}{\eta_0}\cos(\omega t - \beta z) = -\hat{\mathbf{z}}\,\dfrac{E_0}{\eta_0}\cos(\omega t - \beta z)$

下壁、上壁电流大小相等、方向相反。

**例题 2.4**
**题目：** 已知 $y=0$ 的无限大平面为两种电介质的分界面，该分界面上无自由电荷。介质 2 侧的电场强度为 $\mathbf{E}_2 = 10\hat{\mathbf{x}} + 20\hat{\mathbf{y}}$（V/m）。分界面两侧的相对介电常数分别为 $\varepsilon_{r1} = 5$，$\varepsilon_{r2} = 3$。求介质 1 侧的电场强度 $\mathbf{E}_1$ 和电位移矢量 $\mathbf{D}_1$。

**解：**

先求介质 2 侧的电位移矢量：

$$\mathbf{D}_2 = \varepsilon_2\mathbf{E}_2 = 3\varepsilon_0(10\hat{\mathbf{x}} + 20\hat{\mathbf{y}}) = 30\varepsilon_0\hat{\mathbf{x}} + 60\varepsilon_0\hat{\mathbf{y}}$$

根据理想介质分界面上电位移矢量的法向分量连续 $D_{1n} = D_{2n}$：

$$D_{1n} = D_{2n} = 60\varepsilon_0$$

$$E_{1n} = \frac{D_{1n}}{\varepsilon_1} = \frac{60\varepsilon_0}{5\varepsilon_0} = 12 \quad (\text{V/m})$$

再根据理想介质分界面上电场强度的切向分量连续 $E_{1t} = E_{2t}$：

$$E_{1t} = E_{2t} = 10 \quad (\text{V/m})$$

因此：

$$\mathbf{E}_1 = 10\hat{\mathbf{x}} + 12\hat{\mathbf{y}} \quad (\text{V/m})$$

$$\mathbf{D}_1 = \varepsilon_1\mathbf{E}_1 = 5\varepsilon_0(10\hat{\mathbf{x}} + 12\hat{\mathbf{y}}) = 50\varepsilon_0\hat{\mathbf{x}} + 60\varepsilon_0\hat{\mathbf{y}} \quad (\text{C/m}^2)$$

**真题：**

**真题 2.2（来源：2023春季A卷）**
**题目：** 空气和介质的分界面为 $z = 0$ 平面，介质的相对介电常数 $\varepsilon_r = 4$。已知分界面处靠近空气一侧的电场强度为 $\mathbf{E}_2 = (\hat{\mathbf{x}} + 4\hat{\mathbf{y}} + 5\hat{\mathbf{z}})$ V/m，且分界面上无自由电荷。求靠近介质一侧的电场强度 $\mathbf{E}_1$。

**解：**

将电场分解为切向分量（$x$、$y$ 方向）和法向分量（$z$ 方向）。

**切向分量**由边界条件 $E_{1t} = E_{2t}$（切向电场连续）：

$$E_{1x} = E_{2x} = 1 \text{ V/m}, \quad E_{1y} = E_{2y} = 4 \text{ V/m}$$

**法向分量**由边界条件 $D_{1n} = D_{2n}$（无自由电荷时法向电位移连续）：

$$\varepsilon_0 E_{1z} = \varepsilon_r \varepsilon_0 E_{2z}$$

因此：

$$E_{1z} = \frac{E_{2z}}{\varepsilon_r} = \frac{5}{4} = 1.25 \text{ V/m}$$

故：

$$\mathbf{E}_1 = \hat{\mathbf{x}} + 4\hat{\mathbf{y}} + 1.25\hat{\mathbf{z}} \quad (\text{V/m})$$

可见电场进入高介电常数介质后，法向分量减小（$D_n$ 保持连续而 $E_n$ 减小），切向分量不变。

---

[← 上一章: 第1章 绪论与矢量分析](../01-绪论与矢量分析/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第3章 静态电磁场及其解法](../03-静态电磁场及其解法/index.md)
