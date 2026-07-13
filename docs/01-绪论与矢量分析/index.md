# 第1章 绪论与矢量分析

## 课件下载
[📄 01绪论-矢量分析-曲线坐标系](../课程资料/01绪论-矢量分析-曲线坐标系.pdf)
[📄 02矢量分析2-梯度-散度](../课程资料/02矢量分析2-梯度-散度.pdf)
[📄 03矢量分析3-旋度-亥姆霍兹](../课程资料/03矢量分析3-旋度-亥姆霍兹.pdf)

## 课程内容

### 1.1 绪论 — 电磁场与电磁波概述

电磁场理论是研究电场与磁场相互作用及其传播规律的基础学科，是无线通信、雷达、微波技术等领域的理论基石。本课程由国防科技大学电子科学学院徐延林副教授讲授，系统介绍电磁场与电磁波的基本理论和分析方法。

课程主要内容涵盖：
- 矢量分析与场论基础
- 电磁场基本规律（Maxwell方程组）
- 静态电磁场及其解法
- 时变电磁场
- 均匀平面波的传播
- 均匀平面波的反射与透射
- 导行电磁波
- 电磁辐射

### 1.2 矢量代数

矢量是具有大小和方向的量。在电磁场理论中，电场强度 $\mathbf{E}$、磁场强度 $\mathbf{H}$、电位移矢量 $\mathbf{D}$、磁感应强度 $\mathbf{B}$ 等都是矢量。

**矢量基本运算：**

- 矢量加法：$\mathbf{A} + \mathbf{B} = (A_x + B_x)\hat{\mathbf{x}} + (A_y + B_y)\hat{\mathbf{y}} + (A_z + B_z)\hat{\mathbf{z}}$
- 标量积（点乘）：$\mathbf{A} \cdot \mathbf{B} = |\mathbf{A}||\mathbf{B}|\cos\theta = A_xB_x + A_yB_y + A_zB_z$
- 矢量积（叉乘）：$\mathbf{A} \times \mathbf{B} = \begin{vmatrix} \hat{\mathbf{x}} & \hat{\mathbf{y}} & \hat{\mathbf{z}} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix}$

### 1.3 曲线坐标系

在电磁场分析中，常根据问题的几何特征选择合适的坐标系。

**直角坐标系 $(x, y, z)$：**
- 三个相互垂直的坐标面
- 适用于矩形边界问题
- 位置矢量：$\mathbf{r} = x\hat{\mathbf{x}} + y\hat{\mathbf{y}} + z\hat{\mathbf{z}}$

**圆柱坐标系 $(\rho, \phi, z)$：**
- 坐标变换：$x = \rho\cos\phi,\; y = \rho\sin\phi,\; z = z$
- 适用于圆柱形边界问题（如同轴线、圆波导）
- 线元：$\mathrm{d}\mathbf{l} = \mathrm{d}\rho\,\hat{\bm{\rho}} + \rho\mathrm{d}\phi\,\hat{\bm{\phi}} + \mathrm{d}z\,\hat{\mathbf{z}}$

**球坐标系 $(r, \theta, \phi)$：**
- 坐标变换：$x = r\sin\theta\cos\phi,\; y = r\sin\theta\sin\phi,\; z = r\cos\theta$
- 适用于球对称问题（如天线辐射）
- 线元：$\mathrm{d}\mathbf{l} = \mathrm{d}r\,\hat{\mathbf{r}} + r\mathrm{d}\theta\,\hat{\bm{\theta}} + r\sin\theta\mathrm{d}\phi\,\hat{\bm{\phi}}$

### 1.4 标量场的梯度

标量场 $u(\mathbf{r})$ 的梯度是一个矢量，指向标量场变化最快的方向。

$$\nabla u = \frac{\partial u}{\partial x}\hat{\mathbf{x}} + \frac{\partial u}{\partial y}\hat{\mathbf{y}} + \frac{\partial u}{\partial z}\hat{\mathbf{z}} \quad (\text{直角坐标})$$

$$\nabla u = \frac{\partial u}{\partial \rho}\hat{\bm{\rho}} + \frac{1}{\rho}\frac{\partial u}{\partial \phi}\hat{\bm{\phi}} + \frac{\partial u}{\partial z}\hat{\mathbf{z}} \quad (\text{圆柱坐标})$$

$$\nabla u = \frac{\partial u}{\partial r}\hat{\mathbf{r}} + \frac{1}{r}\frac{\partial u}{\partial \theta}\hat{\bm{\theta}} + \frac{1}{r\sin\theta}\frac{\partial u}{\partial \phi}\hat{\bm{\phi}} \quad (\text{球坐标})$$

**梯度的重要性质：**
- 梯度方向是标量函数变化率最大的方向
- 梯度垂直于等值面
- 静电场中：$\mathbf{E} = -\nabla V$（电场强度等于电势的负梯度）

### 1.5 矢量场的散度

散度描述矢量场在某点的"发散"程度，是一个标量。

$$\nabla \cdot \mathbf{A} = \frac{\partial A_x}{\partial x} + \frac{\partial A_y}{\partial y} + \frac{\partial A_z}{\partial z} \quad (\text{直角坐标})$$

$$\nabla \cdot \mathbf{A} = \frac{1}{\rho}\frac{\partial}{\partial \rho}(\rho A_\rho) + \frac{1}{\rho}\frac{\partial A_\phi}{\partial \phi} + \frac{\partial A_z}{\partial z} \quad (\text{圆柱坐标})$$

$$\nabla \cdot \mathbf{A} = \frac{1}{r^2}\frac{\partial}{\partial r}(r^2 A_r) + \frac{1}{r\sin\theta}\frac{\partial}{\partial \theta}(\sin\theta A_\theta) + \frac{1}{r\sin\theta}\frac{\partial A_\phi}{\partial \phi} \quad (\text{球坐标})$$

**散度定理（高斯定理）：**

$$\oint_S \mathbf{A} \cdot \mathrm{d}\mathbf{S} = \int_V \nabla \cdot \mathbf{A}\,\mathrm{d}V$$

物理意义：矢量场通过闭合曲面的通量等于其散度在体积内的积分。

**电磁场中的散度关系：**
- 静电场高斯定律：$\nabla \cdot \mathbf{D} = \rho$
- 磁场高斯定律：$\nabla \cdot \mathbf{B} = 0$（磁通连续性原理）

### 1.6 矢量场的旋度

旋度描述矢量场的"旋转"特性，是一个矢量。

$$\nabla \times \mathbf{A} = \begin{vmatrix} \hat{\mathbf{x}} & \hat{\mathbf{y}} & \hat{\mathbf{z}} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ A_x & A_y & A_z \end{vmatrix} \quad (\text{直角坐标})$$

$$\nabla \times \mathbf{A} = \left(\frac{1}{\rho}\frac{\partial A_z}{\partial \phi} - \frac{\partial A_\phi}{\partial z}\right)\hat{\bm{\rho}} + \left(\frac{\partial A_\rho}{\partial z} - \frac{\partial A_z}{\partial \rho}\right)\hat{\bm{\phi}} + \frac{1}{\rho}\left(\frac{\partial(\rho A_\phi)}{\partial \rho} - \frac{\partial A_\rho}{\partial \phi}\right)\hat{\mathbf{z}}$$

**斯托克斯定理：**

$$\oint_C \mathbf{A} \cdot \mathrm{d}\mathbf{l} = \int_S (\nabla \times \mathbf{A}) \cdot \mathrm{d}\mathbf{S}$$

**电磁场中的旋度关系：**
- 法拉第电磁感应定律：$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$
- 安培环路定律：$\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}$

### 1.7 亥姆霍兹定理

亥姆霍兹定理是矢量场理论的核心定理：

> **任何一个在无穷远处足够快趋于零的矢量场 $\mathbf{F}(\mathbf{r})$，都可以唯一地分解为一个无旋场（有散场）和一个无散场（有旋场）之和：**

$$\mathbf{F}(\mathbf{r}) = -\nabla \Phi(\mathbf{r}) + \nabla \times \mathbf{A}(\mathbf{r})$$

其中：
- $\Phi(\mathbf{r}) = \frac{1}{4\pi}\int_V \frac{\nabla' \cdot \mathbf{F}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\mathrm{d}V'$ 为标量位函数
- $\mathbf{A}(\mathbf{r}) = \frac{1}{4\pi}\int_V \frac{\nabla' \times \mathbf{F}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\mathrm{d}V'$ 为矢量位函数

**应用意义：** 亥姆霍兹定理表明，矢量场由其散度和旋度唯一确定（加上边界条件）。在电磁场中，给定 $\nabla \cdot \mathbf{E} = \rho/\varepsilon$ 和 $\nabla \times \mathbf{E} = -\partial\mathbf{B}/\partial t$，配合边界条件即可唯一确定电场。

---

[← 返回首页](../index.md)
[→ 下一章: 第2章 电磁场基本规律](../02-电磁场基本规律/index.md)
