# 第8章 电磁辐射


## 课程内容

### 8.1 电磁辐射基本概念

时变电荷和电流向空间辐射电磁能量，形成电磁波。天线是实现导行波与自由空间波相互转换的装置。

**滞后位（Retarded Potentials）：**

时变源产生的场以有限速度传播，场点的位函数反映的是源的过去状态。在洛伦兹规范下：

$$\Phi(\mathbf{r}, t) = \frac{1}{4\pi\varepsilon}\int_V \frac{\rho(\mathbf{r}', t - R/c)}{R}\mathrm{d}V'$$

$$\mathbf{A}(\mathbf{r}, t) = \frac{\mu}{4\pi}\int_V \frac{\mathbf{J}(\mathbf{r}', t - R/c)}{R}\mathrm{d}V'$$

**时谐场滞后位：**

$$\dot{\Phi}(\mathbf{r}) = \frac{1}{4\pi\varepsilon}\int_V \frac{\dot{\rho}(\mathbf{r}')e^{-jkR}}{R}\mathrm{d}V'$$

$$\dot{\mathbf{A}}(\mathbf{r}) = \frac{\mu}{4\pi}\int_V \frac{\dot{\mathbf{J}}(\mathbf{r}')e^{-jkR}}{R}\mathrm{d}V'$$

因子 $e^{-jkR}$ 代表相位滞后 $kR = 2\pi R/\lambda$。

### 8.2 电基本振子（赫兹偶极子）

短电流元 $I\mathrm{d}l$（$\mathrm{d}l \ll \lambda$），是最基本的辐射单元。

**远场（$kr \gg 1$）辐射场：**

$$E_\theta \approx j\frac{kI\mathrm{d}l}{4\pi}\eta_0\frac{e^{-jkr}}{r}\sin\theta$$

$$H_\phi \approx j\frac{kI\mathrm{d}l}{4\pi}\frac{e^{-jkr}}{r}\sin\theta$$

远场特性：
- 球面 TEM 波：$E_\theta/H_\phi = \eta_0$
- 场强 $\propto 1/r$（辐射场）
- $\sin\theta$ 方向性：振子轴方向（$\theta = 0$）辐射为零
- 垂直于振子轴方向（$\theta = 90^\circ$）辐射最强

**辐射功率与辐射电阻：**

坡印廷矢量：$S_r = \frac{1}{2}\eta_0|H_\phi|^2$

$$P_{rad} = \frac{1}{2}I^2 R_{rad} = 40\pi^2 I^2\left(\frac{\mathrm{d}l}{\lambda}\right)^2$$

$$R_{rad} = 80\pi^2\left(\frac{\mathrm{d}l}{\lambda}\right)^2\,\Omega$$

**近场：** $kr \ll 1$ 时为准静态场，$\propto 1/r^2$ 或 $1/r^3$，储能为主。

### 8.3 天线基本参数

**方向图与方向性系数：**

归一化方向图函数：$F(\theta, \phi) = |E(\theta, \phi)|/|E_{\max}|$

方向性系数：$D = \frac{4\pi U_{\max}}{P_{rad}}$
- 电基本振子：$D = 1.5$（1.76 dBi）
- 半波振子：$D \approx 1.64$（2.15 dBi）

**增益：** $G = \eta D$（$\eta$ 为天线效率）

**输入阻抗与带宽：**

$Z_{in} = R_{in} + jX_{in}$，带宽一般定义为 $VSWR \leq 2$ 范围。

**波束宽度：** 半功率波束宽度（HPBW）是主瓣功率下降一半（-3dB）的角度宽度。

### 8.4 对称振子天线

振子总长度 $2L$，电流近似正弦分布：

$$I(z) = I_0\sin[k(L - |z|)]$$

**半波振子（$2L = \lambda/2$）：** $I(z) = I_0\cos(kz)$

远场辐射场：

$$E_\theta = j\frac{60I_0}{r}\frac{\cos(kL\cos\theta) - \cos(kL)}{\sin\theta}e^{-jkr}$$

- 半波振子：8 字形方向图，$R_{rad} \approx 73\,\Omega$
- 全波振子（$2L = \lambda$）：方向图变窄，有旁瓣

### 8.5 天线阵列

多个天线单元组合，实现方向图控制。

**方向图乘积定理：** 阵列总方向图 = 单元因子 × 阵因子

**二元阵：** 等幅、相位差 $\xi$、间距 $d$

阵因子：$AF = 2\cos\left(\frac{kd\cos\theta + \xi}{2}\right)$

**$N$ 元均匀线阵：**

$$AF = \frac{\sin(N\psi/2)}{\sin(\psi/2)},\quad \psi = kd\cos\theta + \xi$$

- 主瓣方向：$\theta_m = \arccos(-\xi/kd)$
- 改变 $\xi$ 可实现电子扫描（相控阵原理）
- $N$ 越大，波束越窄，增益越高
- 阵元间距 $d > \lambda/2$ 时可能出现栅瓣

---

[← 上一章: 第7章 导行电磁波](../07-导行电磁波/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第9章 课程案例仿真与实践](../09-课程案例仿真/index.md)
