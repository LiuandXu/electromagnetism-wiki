# 第3章 静态电磁场及其解法

### 3.1 静电场分析方法

静态场是指场量不随时间变化的电磁场。静电场由静止电荷产生，电场与磁场解耦。

**静电场基本方程：**

$$\nabla \times \mathbf{E} = 0,\quad \nabla \cdot \mathbf{D} = \rho$$

**电位方程：**

由 $\mathbf{E} = -\nabla V$ 代入 $\nabla \cdot \mathbf{D} = \rho$ 得到：

$$\nabla^2 V = -\frac{\rho}{\varepsilon} \quad (\text{泊松方程 Poisson's Equation})$$

在无自由电荷区域（$\rho = 0$）：

$$\nabla^2 V = 0 \quad (\text{拉普拉斯方程 Laplace's Equation})$$

**电位分布函数：**

- 点电荷：$V = \frac{q}{4\pi\varepsilon R}$
- 体电荷分布：$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon}\int_V \frac{\rho(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\mathrm{d}V'$
- 面电荷分布：$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon}\int_S \frac{\rho_s(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\mathrm{d}S'$

**电容计算：**

电容定义 $C = Q/V$。常见结构：
- 平行板：$C = \frac{\varepsilon S}{d}$
- 同轴线：$C = \frac{2\pi\varepsilon l}{\ln(b/a)}$
- 同心球：$C = 4\pi\varepsilon\frac{ab}{b-a}$

**静电场能量：**

$$W_e = \frac{1}{2}\int_V \mathbf{D} \cdot \mathbf{E}\,\mathrm{d}V = \frac{1}{2}\int_V \varepsilon E^2\mathrm{d}V$$

**真题：**

**真题 3.1（来源：2021秋季A卷）**
**题目：** 真空中有一半径为 $a$ 的圆盘，均匀带电，面电荷密度为 $\rho_s$。圆盘位于 $xy$ 平面，圆心在原点。求其轴线上距圆心 $z$ 处的电场强度。

**解：**

在圆盘上取半径为 $r$、宽度为 $dr$ 的圆环，其电荷量为 $dq = \rho_s \cdot 2\pi r\, dr$。

由对称性，轴线上 $z$ 处的电场仅有 $z$ 分量。圆环上电荷元 $dq$ 在 $z$ 处产生的电场 $z$ 分量为：

$$dE_z = \frac{1}{4\pi\varepsilon_0} \cdot \frac{dq \cdot z}{(r^2 + z^2)^{3/2}} = \frac{\rho_s z}{2\varepsilon_0} \cdot \frac{r\, dr}{(r^2 + z^2)^{3/2}}$$

对 $r$ 从 $0$ 到 $a$ 积分：

$$E_z = \frac{\rho_s z}{2\varepsilon_0} \int_0^a \frac{r\, dr}{(r^2 + z^2)^{3/2}}$$

令 $u = r^2 + z^2$，$du = 2r\, dr$：

$$E_z = \frac{\rho_s z}{4\varepsilon_0} \int_{z^2}^{a^2+z^2} u^{-3/2}\, du = \frac{\rho_s z}{4\varepsilon_0} \left[-2u^{-1/2}\right]_{z^2}^{a^2+z^2}$$

$$E_z = \frac{\rho_s z}{2\varepsilon_0}\left(\frac{1}{z} - \frac{1}{\sqrt{a^2 + z^2}}\right) = \frac{\rho_s}{2\varepsilon_0}\left(1 - \frac{z}{\sqrt{a^2 + z^2}}\right)$$

因此轴线上的电场强度为：

$$\boxed{\mathbf{E} = \frac{\rho_s}{2\varepsilon_0}\left(1 - \frac{z}{\sqrt{a^2 + z^2}}\right)\hat{\mathbf{z}}}$$

**讨论：**

- 当 $z \to 0$（圆心处）：$E_z \to \rho_s / (2\varepsilon_0)$，为无限大带电平面的电场。
- 当 $z \to \infty$：$E_z \approx \frac{\rho_s}{2\varepsilon_0} \cdot \frac{a^2}{2z^2} = \frac{\rho_s \pi a^2}{4\pi\varepsilon_0 z^2} = \frac{Q}{4\pi\varepsilon_0 z^2}$，退化为点电荷电场。

### 3.2 恒定磁场分析方法

恒定磁场由恒定电流产生：

$$\nabla \times \mathbf{H} = \mathbf{J},\quad \nabla \cdot \mathbf{B} = 0$$

**矢量磁位 $\mathbf{A}$：**

由 $\nabla \cdot \mathbf{B} = 0$ 引入：$\mathbf{B} = \nabla \times \mathbf{A}$

库仑规范 $\nabla \cdot \mathbf{A} = 0$ 下：

$$\nabla^2 \mathbf{A} = -\mu \mathbf{J}$$

线电流解：$\mathbf{A} = \frac{\mu}{4\pi} \int_C \frac{I\mathrm{d}\mathbf{l}'}{R}$

**标量磁位 $V_m$：**

在 $\mathbf{J} = 0$ 区域，$\mathbf{H} = -\nabla V_m$，$\nabla^2 V_m = 0$。

**电感：**

- 自感：$L = \frac{\Psi}{I}$
- 互感：$M_{21} = \frac{\Psi_{21}}{I_1}$

**磁场能量：**

$$W_m = \frac{1}{2}\int_V \mathbf{B} \cdot \mathbf{H}\,\mathrm{d}V = \frac{1}{2}\int_V \mu H^2\mathrm{d}V$$

### 3.3 边值问题及唯一性定理

**边值问题分类：**

| 类型 | 边界条件 | 说明 |
|------|---------|------|
| Dirichlet | $V\|_S = f(\mathbf{r})$ | 给定边界电位值 |
| Neumann | $\left.\frac{\partial V}{\partial n}\right\|_S = g(\mathbf{r})$ | 给定边界法向导数 |
| 混合型 | 部分Dirichlet + 部分Neumann | 混合边界条件 |

**唯一性定理：**

> 对于泊松/拉普拉斯方程，给定区域内源分布和边界上适当的边界条件，解是唯一的（最多差一个常数）。

这是镜像法、分离变量法、有限差分法等求解方法的理论基础。

### 3.4 镜像法（Method of Images）

镜像法是求解具有简单导体边界的静电场边值问题的重要方法。

**基本思想：** 用假想的镜像电荷替代边界上的感应电荷，使求解区域内场的分布等效。

**典型应用：**

**(1) 无限大导体平面前点电荷：**

导体平面 $z = 0$，点电荷 $q$ 在 $(0, 0, h)$。镜像电荷 $q' = -q$ 在 $(0, 0, -h)$。

上半空间电位（叠加原理）：

$$V(x, y, z) = \frac{q}{4\pi\varepsilon}\left[\frac{1}{\sqrt{x^2 + y^2 + (z - h)^2}} - \frac{1}{\sqrt{x^2 + y^2 + (z + h)^2}}\right],\quad z > 0$$

导体表面感应电荷密度：$\rho_s = -\varepsilon\left.\frac{\partial V}{\partial z}\right|_{z=0} = -\frac{qh}{2\pi(x^2 + y^2 + h^2)^{3/2}}$

**(2) 导体球附近点电荷：**

导体球半径 $a$，接地，点电荷 $q$ 距球心 $d > a$。

镜像电荷 $q' = -\frac{a}{d}q$，位置 $b = a^2/d$（球内）。

**(3) 介质分界面前点电荷：**

需用两个区域的等效问题分别求解。

**镜像法的适用条件：**
- 边界为简单几何形状（平面、球面、圆柱面）
- 边界为等位面（导体）或对称面
- 镜像源必须在求解区域之外

**例题：**

**例题 3.1**
**题目：** 在无限大接地导体平面（$z = 0$）上方 $z = d$ 处放置一个点电荷 $q$，求上半空间（$z > 0$）的电位分布和电场分布。

**解：**

**理论依据：** 静电场的唯一性定理。镜像法的核心逻辑是等效与唯一——在所求场域以外的空间中放置适当的等效电荷（镜像电荷），使其满足边界条件，从而将原边值问题替换为均匀无界空间中的问题来求解。

**求解：**

在 $z = -d$ 处放置镜像电荷 $q' = -q$。上半空间任意点 $P(x, y, z)$（$z > 0$）到实电荷和镜像电荷的距离分别为：

$$r_1 = \sqrt{x^2 + y^2 + (z-d)^2}, \quad r_2 = \sqrt{x^2 + y^2 + (z+d)^2}$$

电位分布为：

$$\Phi = \frac{q}{4\pi\varepsilon_0}\left(\frac{1}{r_1} - \frac{1}{r_2}\right) = \frac{q}{4\pi\varepsilon_0}\left[\frac{1}{\sqrt{x^2 + y^2 + (z-d)^2}} - \frac{1}{\sqrt{x^2 + y^2 + (z+d)^2}}\right]$$

验证边界条件：在 $z = 0$ 处，$r_1 = r_2$，故 $\Phi = 0$，满足接地导体平面的边界条件。

电场为电位的负梯度：

$$\mathbf{E} = -\nabla\Phi$$

导体表面的感应电荷面密度为：

$$\rho_s = -\varepsilon_0\frac{\partial\Phi}{\partial z}\bigg|_{z=0} = -\frac{qd}{2\pi(x^2+y^2+d^2)^{3/2}}$$

**求解原则：**
1. 所有镜像电荷必须位于所求场域以外的空间中
2. 镜像电荷的个数、位置及电荷量以满足场域边界面上的边界条件来确定

电偶极子远区辐射场为 $E_\theta = \frac{Idl}{2\lambda}\eta_0\sin\theta$（将在第 8 章详细推导）。

---

[← 上一章: 第2章 电磁场基本规律](../02-电磁场基本规律/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第4章 时变电磁场](../04-时变电磁场/index.md)
