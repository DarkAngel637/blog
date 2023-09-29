<!--
 * @Author: Dark Angel
 * @Date: 2023-09-02 12:51:34
 * @LastEditTime: 2023-09-02 12:56:16
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\docs\git.md
-->
# git - 简明指南

(vscode编辑器有个分叉的符号,这个界面可以review自己的代码,保证代码改动代码改动的文件都是在预期范围内)
### 安装
---
 [git OSX 版](http://git-scm.com/download/mac)
|| [git Windows 版](https://gitforwindows.org/)
|| [git Linux 版](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git)

### 创建新仓库
---
创建新文件夹，打开，然后执行
```shell
git init
``` 
以创建新的 git 仓库。

### 检出仓库
---
执行如下命令以创建一个本地仓库的克隆版本：
```shell
git clone /path/to/repository
```
如果是远端服务器上的仓库，你的命令会是这个样子：
```shell
git clone username@host:/path/to/repository
```
克隆指定分支上的代码
```shell
git clone -b 指定分支 仓库地址
```
```shell
git clone --bare /path/to/repository
```
从 https://github.com/vueComponent/ant-design-vue-pro.git 上克隆一个提交(--depth=1) 到my-project 文件夹里
```shell
git clone --depth=1 https://github.com/vueComponent/ant-design-vue-pro.git my-project

# 不知道干嘛的

git config --global --add safe.directory 'D:/others-----F(app_is_E)/学习文档/实训一/实训/react-router-dom v6/aaa/sourcecode'

```
###  git 仓库一些概念的解释

- remote 远程仓库

>本地仓库两个部分

- disk  实际源文件

- local 信息表

> 四者的关系

  - 信息表更新本地源文件，本地源文件push到远端
### 工作流
---
你的本地仓库由 git 维护的三棵“树”组成。第一个是你的 工作目录，它持有实际文件；第二个是 暂存区（Index），它像个缓存区域，临时保存你的改动；最后是 HEAD，它指向你最后一次提交的结果。

![working ---add--->Index---commit--->head---push--->remote](http://rogerdudler.github.io/git-guide/img/trees.png)

### 添加和提交
---
你可以提出更改（把它们添加到暂存区），使用如下命令：
```shell
  git add <filename> # 比如:

# git add "git 的简单使用.md"

git restore . # git add . 的反操作

git add *
```
这是 git 基本工作流程的第一步；使用如下命令以实际提交改动：

```shell
git commit -m "代码提交信息"

# 提交暂存区的指定文件到仓库区
git commit [file1] [file2] ... -m "代码提交信息"

git commit --amend --only -m "新的提交信息" # 原来的提交信息写错了,修改一下

git commit [file1] [file2]... --amend # 暂存的内容加到上一次提交 (也就是 上一次 commit 是自己提交的时候才能用,要不然就是加到了别人的 commit 上) 这个是补充指定文件提交
git commit --amend # 暂存的内容加到上一次提交 (也就是 上一次 commit 是自己提交的时候才能用,要不然就是加到了别人的 commit 上)

 git commit --amend --author "New Authorname <authoremail@mydomain.com>" # 单个提交(commit)里的用户名和邮箱不对

git commit -am " 提交信息 " # 将以跟踪文件的修改提交缓存区 (省略了 git add .)
git commit -n( git commit --no-verify ) #  跳过 commit-msg 或 pre-commit githooks

# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
 git commit --amend -m [message]
 git commit -v # 查看那些文件将要被提交 

git  commit -a # 

# =======================================================================
每一步 git 操作前都要

git status # 查看文件改动是不是自己要改的文件

git log # 查看提交记录是不是自己需要的那一条

# =======================================================================
```
现在，你的改动已经提交到了 HEAD，但是还没到你的远端仓库。

- 有关于 git commit --amend : git commit --amend 会给`最后一条提交信息`补充提交内容,要先看看最后一条提交信息`是不是自己写`的,否则会出问题
```shell
git add .

git commit --amend

########## 之后会出现这样一个页面 ##################
# -------------- 说明 : 这里修改提交信息 --------------
docs(jest): 修改了点东西     

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon May 16 00:47:30 2022 +0800
#
# On branch master
# Your branch is up to date with 'origin/master'.
#
# You are currently rebasing.
#
# Changes to be committed:
#	modified:   jest----unit_test/readme.md
#
# Changes not staged for commit:
#	modified:   "git/git \347\232\204\347\256\200\345\215\225\344\275\277\347\224\250.md"
#
########## 之后会出现这样一个页面 ##################

简单介绍一下可能用到的

i : insert 插入 编辑完提交信息之后,将光标移到最下面(不能出现可能损坏提交信息和提交文件路径的事情!!!!!!) 输入 :wq 就可以退出编辑页面


# 之后就可以

git push -f 要提交的分支 # 添加到分支 (否则会添加 commit 信息)
```
### 推送改动
---
你的改动现在已经在本地仓库的 HEAD 中了。执行如下命令以将这些改动提交到远端仓库：
```shell
git push origin master

将更改推送到远程存储库（并记住分支）

git push -u origin [branch name] # 设置默认分支并推送,之后就可以直接 git push

# ==============================

# 删除一个远程分支

git push origin --delete 要删除的分支名 

git branch -dr [remote/branch]
#  或者

git push origin :要删除的分支名


 将更改推送到远程存储库（记住的分支）

git push

# 删除一个本地分支

git branch -D 要删除的分支名 # 强制删除

git branch -d 要删除的分支名 # 非强制删除 

git branch -a # 加上-a参数，可以查看远程分支，远程分支会用红色表示出来（开了颜色支持的前提下

git branch -m [old branch name] [new branch name] # 重命名本地分支

git branch -r  # 预览本地存储库中的所有分支

git checkout -b [branch name] origin/[branch name]  # 克隆一个远程分支并切换到它

git checkout — track origin # 该命令用于切换分支。这特别适用于第一次访问分支

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]
# 新建一个分支,并与远程分支建立追踪关系
git branch --track "分支名" "远程分支名"

# 在现有分支与指定的远程分支之间 建立追踪关系，
$ git branch --set-upstream [branch] [remote-branch]
```
切换到上次签出的分支
```shell
git checkout -
```
放弃对文件的更改

```shell
git checkout -- [file-name.txt]
# 放弃对全部文件的修改
git checkout .
```
可以把 master 换成你想要推送的任何分支。
如果你还没有克隆现有仓库，并欲将你的仓库连接到某个远程服务器，你可以使用如下命令添加：
```shell
git remote add origin <server>

```
如此你就能够将你的改动推送到所添加的服务器上去了。

```shell
# 自己试过的:

git push origin --delete 要删除的分支名

之后依赖于公共开发分支再开一个分支,分支名跟之前的一样,之后提交到远程
```

### 远程仓库重命名
```shell

git remote rename [oldRemoteName] [newRemoteName]   # 将名为 oldRemoteName 的远程仓库重命名为 newRemoteName

git remote rename origin demo         # 将名称为 origin 的远程仓库重命名为 demo
```
### 分支
---
分支是用来将特性开发绝缘开来的。在你创建仓库的时候，master 是“默认的”分支。在其他分支上进行开发，完成后再将它们合并到主分支上。
```js
/*      
            --------自己建的分支--------
           |                           \
-----------*-------------master---------*------------------>
        branch                        merge
*/
```
创建一个叫做“feature_x”的分支，并切换过去：
```shell
git checkout -b feature_x
```
切换回主分支：
```shell
git checkout master
```
再把新建的分支删掉：
```shell
git branch -d feature_x
```
除非你将分支推送到远端仓库，不然该分支就是 不为他人所见的：
```shell
git push origin <branch>
```
### 更新与合并
---
要更新你的本地仓库至最新改动，执行：
```shell
git pull 仓库地址别名 拉取仓库的哪一个分支 # 此时此刻如果是拉取新分支到本地的话 git branch 是获取不到拉取下来的新分支的 

# 解决冲突的几点说明
incomming change 本地编辑器里的代码

current change 从远程拉取下来的代码

对于同一个文件，如果有多个分支需要合并时，容易出现冲突。(多个分支的同一行代码不同)
因为开发者A和开发者B修改了同一个文件，那么在「merge」代码时就可能存在冲突问题需要解决。

关键词: conflict : 存在冲突
关键词: both added : 已解决冲突

# ----------------------------------

# git pull --rebase 解决冲突

#情景描述：

# git pull --rebase 的作用就不多说了，A，B同时修改了一个文件，当git要提交，执行了git commit -a -m ，再执行git pull --rebase的时候，有冲突产生。

#解决方案
# -------------------------------------
# 定位到冲突文件
# 手动解决冲突
# 执行git add .
git add .
# 执行git rebase --continue
git rebase --continue
# 此时执行git status 看下当前在那个分支上，如果在临时分支上，则需要执行git branch
# 执行git push即可完成
```
### git pull --rebase origin [branchName]
git pull --rebase origin [branchName] = git fetch + git rebase
```js
// 假设当前分支dev, commit 为 a b c d e
// 假设master分支, commit 为 a b f g h
git pull --rebase origin master
// 当前分支dev commit 变为 a b c d e f g h
```
### git rebase master 以当前分支(-----第二个参数不写默认为当前分支-----)最新一次提交作为基底,把「master」分支公共父节点之后的版本追加到新基底之后(变基)

```shell
# 假设当前分支dev, commit 为 a b c d e
# 假设master分支, commit 为 a b f g h
git rebase origin/master
# 当前分支dev commit 变为 a b f g h c d e

# -----------------------------------------
# 这两条命令等价于git rebase master feature
git checkout array-algorithm
git rebase master
```
### 一个完整的更新代码流程 (提交代码之前应该 pull 一下更新一下与主分支的差异,并且review代码)

review 代码可以利用 VScode的源代码管理,也就是长得像树杈子的那个东西 review 代码

```shell

git pull origin master # 从远程仓库拉取代码

# 解决冲突,冲突见上面的几点说明

# 冲突解决完之后

git status

git log

git add .

git status

git log

git commit -m "提交信息"

git status

git log

git push origin master

# 可以先将本地改动 commit 到 本地代码库之后再 拉代码 推到远程代码库
```
以在你的工作目录中 获取（fetch） 并 合并（merge） 远端的改动。
要**合并其他分支到**你的**当前分支**（例如 master），执行：
```shell
git merge <branch>

# 将一个分支合并到一个目标分支(也就是将 branch 合并到当前分支)

git merge [source branch] [target branch]

# 优点：每个节点都是严格按照时间排列。当合并发生冲突时，只需要解决两个分支所指向的节点的冲突即可

# 缺点：合并两个分支时大概率会生成新的节点并分叉，久而久之提交历史会变成一团乱麻
# 例如现在有两个分支 master 和 feature, 你在 feature 分支上进行了实验，这时候有个另外的人在 master 分支上进行了新的提交。那么你需要将 master上别人的修改应用到 feature 分支上。切换到其他分支A上再将其他分支 merge到 A 上

git merge --abort # 取消合并

# ===============================================

# 拉取 同仓库下指定的远程分支: 在本地先建立远程同名的分支,切换到这个分支上在拉取远程的代码

# 比如说 ,本地现在没有 a 分支,要从远程仓库下拉取a 分支到本地:
git checkout -b a

git pull origin a

# 就可以了 
```
在这两种情况下，git 都会尝试去自动合并改动。遗憾的是，这可能并非每次都成功，并可能出现冲突（conflicts）。 这时候就需要你修改这些文件来手动合并这些冲突（conflicts）。改完之后，你需要执行如下命令以将它们标记为合并成功：
```shell
git add <filename>

git add -p <filename> # 针对某个文件的改动存入暂存区
```
在合并改动之前，你可以使用如下命令预览差异：
```shell
git diff <source_branch> <target_branch>

git diff <file_name># 查看文件改动

# 光一个 git diff 即比较 本地代码和远程代码库里的不同
```

### 删除一个远程分支:
```shell
(main)$ git push origin --delete my-branch

# 或者
(main)$ git push origin :my-branch
```
### 删除一个本地分支:

```shell
(main)$ git branch -D my-branch
```


### 关于 incoming change 和 current change
incoming change 是vscode 编辑器里暂存起来的代码改动
current change 是远程仓库里拉取下来的代码改动
### 你解决完所有冲突和测试过后, git add 变化了的(changed)文件, 然后用git rebase --continue 继续rebase。
```shell
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```
在解决完所有的冲突过后，得到了与提交前一样的结果, 可以执行git rebase --skip
```shell
(my-branch)$ git rebase --abort
```
### 标签
---
为软件发布创建标签是推荐的。这个概念早已存在，在 SVN 中也有。你可以执行如下命令创建一个叫做 1.0.0 的标签：
```shell


# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag 版本号

# 新建一个tag在指定commit
$ git tag 版本号 "提交hashId"

# 删除本地tag
$ git tag -d 版本号

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show 版本号

# 提交指定tag
$ git push [remote] 版本号

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] 版本号

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```
1b2e1d63ff 是你想要标记的提交 ID 的前 10 位字符。可以使用下列命令获取提交 ID：
```shell
git log
```
你也可以使用少一点的提交 ID 前几位，只要它的指向具有唯一性。

log
如果你想了解本地仓库的历史记录，最简单的命令就是使用:
```shell
git log

# 如果是看上一次提交的信息(下面这俩)

git show

git log -n1 -p

# 一行显示提交信息
git log --oneline

```
```shell

git log --summary # 查看更改（详细）
```
你可以添加一些参数来修改他的输出，从而得到自己想要的结果。 只看某一个人的提交记录:
```shell
git log --author=bob

# 根据提交信息模糊搜索提交

git log --grep=bob

# 输出 2022-01-01 之后,2022-01-31 之前的提交
git log --after="2022-01-01" --before="2022-01-31"
# 或者
git log --until="2022-01-01" --since="2022-01-31"

git log --format="%h %as %s %an"
# %h 是缩写的 commit hash，%as 是日期的一种格式，%s 是 commit 的主题，%an 是 commit 的作者。

# 查看某人在所有分支的过去一周的 commit 
git log --author="guang" --after="2022-01-01" --before="2022-01-07" --all
# 除了合并的提交

git log --no-merges 

# 只有合并的提交
git log --merges 
```
一个压缩后的每一条提交记录只占一行的输出:
```shell
git log --pretty=oneline
```
或者你想通过 ASCII 艺术的树形结构来展示所有的分支, 每个分支都标示了他的名字和标签:
```shell
git log --graph --oneline --decorate --all
```
看看哪些文件改变了:
```shell
git log --name-status
```
这些只是你可以使用的参数中很小的一部分。更多的信息，参考：
```shell
git log --help

git log --merge # 将此次合并中造成冲突的来自于两个分支中的具体提交列出来

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示一个漂亮的、整齐的提交图以及 ref pointers
git log --graph --decorate --oneline

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 按照 commit 数来倒序排列
$ git shortlog -n

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 按照人来分组统计

$ git shortlog 

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

 # 比较暂存区与指定commit-id的差异

git diff --cached [<commit-id>] [<path>...]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

 # 比较工作区与最新本地版本库。如果HEAD指向的是master分支，那么HEAD还可以换成master

git diff HEAD [<path>...]

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 比较两个分支中同一个文件的差异
$ git diff [first-branch]...[second-branch]  文件的相对路径

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"
# 一个礼拜的
git diff HEAD@{7.day.agree} HEAD@{0}
# 比较两个提交指定文件的改动
git diff commithash1 commithash2 filepath

# 查看两个提交版本id修改了那些文件.

git diff commit-id1 commit-id2 --stat 

 # 比较工作区与指定commit-id的差异

git diff commit-id [<path>...]


 # 比较两个commit-id之间的差异
git diff [<commit-id>] [<commit-id>]

 # 比较两个版本的src 文件夹的差异
git diff 版本号码1 版本号码2 src

# 把指定的提交拉到你的当前分支
git cherry-pick <commit-hash>

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交 ()
# git log 是查看 commit 历史的，而 git shortlog 是查看分组的统计结果, git reflog 是记录 ref 的修改历史的。.git 的 logs/refs 里
$ git reflog
```
### 替换本地改动
---
假如你操作失误（当然，这最好永远不要发生），你可以使用如下命令替换掉本地改动：
```shell
git checkout -- <filename>
```
此命令会使用 HEAD 中的最新内容替换掉你的工作目录中的文件。已添加到暂存区的改动以及新文件都不会受到影响。

假如你想丢弃你在本地的所有改动与提交，可以到服务器上获取最新的版本历史，并将你本地主分支指向它：
```shell
git fetch origin

# =========从远程上拉取所有分支====================

git fetch --all

```
git reset --hard origin/master

### 删除最后一次提交
```shell
$ git reset HEAD^ --hard
$ git push -f [remote] [branch]
```
### 实用小贴士
---
内建的图形化 git：
```shell
gitk
```
彩色的 git 输出：
```shell
git config color.ui true
```
显示历史记录时，每个提交的信息只显示一行：
```shell
git config format.pretty oneline
```
交互式添加文件到暂存区：
```shell
git add -i
```
### 查看git 设置的用户 邮箱
```shell
# 显示当前的Git配置

git config --list

# 编辑Git配置文件

$ git config -e [--global]

# 全局的

# 查看

 git config --global user.email                     

 git config --global user.name  

# 设置

 git config --global user.email "邮箱地址"

 git config --global user.name  "用户名"

# 本地的

# 查看

 git config user.email                     

 git config user.name

# 设置

 git config user.email "[name]"                    

 git config user.name  "[email address]"
```
### 代码回滚版本
```shell

git log # 查看要回滚的commit id

git reset commitHashValue # 重置代码版本为指定版本  ①

git push origin 分支名 # 提交重置后的版本           ②

# ----------------------------以下的强制操作请慎重考虑(尽量不要用 reset 回滚代码,否则容易造成数据丢失)-------------------------------------------

git reset **--hard** commitHashValue # 强制reset      ①

git push **-f** origin 分支名 # 强制提交重置后的版本    ②

# ----------------------------以下的强制操作请慎重考虑(尽量不要用 reset 回滚代码,否则容易造成数据丢失)-------------------------------------------


git reset HEAD # 撤销前一次 git add . ,stash 之后出现代码冲突可以撤销冲突

# 硬重置之后找回内容(只有几天的时间) 也就是get reset --hard commitHashValue 之后

git reflog # 查看硬重置之前的信息

git reset --hard SHAa6d398f
```

* 但 *git reset* 有个致命缺点 : 回退到某一版本之后,这个版本之后的所有版本都将不复存在
- **git rebase**
```shell

git rebase branchname/commithash # 先把自己修改扔到一边,先把main 最新修改拿过来,之后再最新修改的基础上添加自己的commit(也就是 变基 ) 相当于是在最新的commit 上做了修改  \*\*\*\*\*但是 git rebase main  之后在提交代码的时候要加上 -f (所以不能对多人协作的分支进行 git push -f branch)

git rebase -i 起点commit id 终点 commit id # 

详见 Pro git : 6.4 重写历史

git rebase -i HEAD~10 调整最近10次提交的日志、或合并多次提交为1次，让log更好看更清晰
# =================================================

# pick：简写p，启用该commit；

# reword：简写r，使用该commit，但是修改提交信息，修改后可以继续编辑后面的提交信息；

# edit：简写e，使用commit，停止合并该commit；

# squash：简写s，使用该commit，并将该commit并入前一commit；

# drop：简写d，移除该commit；

# fixup:简写f,

# exec:简写e,

# break:简写b,

# label:简写l,

# reset:简写r,

# merge:简写m,

# =================================================

# 优点：会使提交历史看起来更加线性、干净

# 缺点：虽然提交看起来像是线性的，但并不是真正的按时间排序，比如图3-3中，不管C4早于或者晚于C3提交它最终都会放在C3后面。并且当合并发生冲突时，理论上来讲有几个节点rebase到目标分支就可能处理几次冲突

# =================================================

# git rebase 的使用

  # % git rebase -i HEAD~受到影响的提交信息数量 %
git log # 查看提交

git rebase -i HEAD~2 # 两个提交节点的commit 会消失,

按 s 进入编辑模式

编辑要修改,要合并的commit 信息

esc 再输入:wq 调到下一个命令行页面  填写提交信息

修改完信息之后esc 和输入 :wq 结束变基

最后 git push -f  提交代码

# rebase 之后commitid 将会丢失

# ======================== git rebase -i 起点commit id 重点 commit id =========================================
pick fe0a0d9 准备第一个文件
pick 0760449 这是第二个文件
pick 7eb3e64 有一个文件修改了

# Rebase 9092d2c..7eb3e64 onto 9092d2c (3 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified); use -c <commit> to reword the commit message
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# ========================git rebase -i 起点commit id 重点 commit id =========================================

修改完提交信息后会进入下一个页面

# ========================git rebase -i 起点commit id 重点 commit id 之二 =========================================

# This is a combination of 3 commits.
# This is the 1st commit message:

准备第一个文件

# This is the commit message #2:

这是第二个文件

# This is the commit message #3:

有一个文件修改了

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon May 16 17:47:00 2022 +0800
#
# interactive rebase in progress; onto 9092d2c
# Last commands done (3 commands done):
#    squash 0760449 这是第二个文件
#    squash 7eb3e64 有一个文件修改了
# No commands remaining.
# You are currently rebasing.
#
# Changes to be committed:
#	new file:   one.ts
#	new file:   two.ts
#


# ========================git rebase -i 起点commit id 重点 commit id 之二 =========================================

```
### 删除任意提交(commit)
```shell
$ git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
$ git push -f [remote] [branch]

```
- **git revert**
```shell
# git revert 的使用

  git revert HEAD    #              撤销前一次 commit

  git revert HEAD^  #             撤销前前一次 commit

  git revert commitId #           撤销至指定版本

  # 完整的回滚流程(拿第三个来举例子)

  git revert commitId # 回滚到指定版本

  git commit -m "提交信息" # 提交回滚的信息

  git push origin(这个是git地址的别名) master(这个是分支名) # 提交到远端 
# ==========================================================

 git clean -f # 此命令用于删除本地存储库中未跟踪的文件。
 
 git clean -d # 此命令用于删除本地存储库中未跟踪的目录。你也可以将其组合到 git clean -fd 中以同时执行这两项操作。
```
### git reset 的使用 

```shell
git reset HEAD^ --hard # 硬重置

# HEAD^ : 有一个 ^ 表示向前推一步 如果要退两步，那就是HEAD^^；退三步就是HEAD^^^；如果推10步呢？可以使用HEAD~10

# 关于 --hard,--soft ,--mix 三个参数

# - soft：将HEAD回滚到指定的commit处，对索引和工作区没有影响。主要用于对最后一次提交的修改。

# 比如：你commit了修改后发现这个commit里漏掉了一个文件，你可以再提交一次。也可以回滚此次提交，然后将漏掉的文件添加到索引后再次提交。

# - mixed：默认reset操作。以目前HEAD所指向的commit为基准，重置索引区，不重置工作区。

# 举个例子：假设你修改了a.txt文件，并将其添加到索引区。如果此时执行reset，则添加索引区的操作被回滚，而a.txt文件的修改还保留。

# - hard：以目前HEAD所指向的commit为基准，重置索引区和工作区。—hard表示目录中的存档也需要变化。如果你不添加—hard，你会发现player.txt文件的内容并没有变化。你还需要再执行一下git restore player.txt

# 举个例子：假设你修改了a.txt文件，并将其添加到索引区。如果此时执行reset，则添加索引区的操作被回滚，同时a.txt也被回滚到修改前的状态。

git reset --soft HEAD^ # 撤销 刚刚提交过的本地 commit 提交 
```

- git restore 的使用

```shell
git restore # 使得在工作空间但是不在暂存区的文件撤销更改(`内容恢复到没修改之前的状态`)

git restore --staged # 将暂存区的文件从暂存区撤出，但`不会更改文件的内容` 也就是 撤销 git add 

```

- git stash 的使用

```shell
# =================================================================

git stash # 将当前所有暂存和非暂存修改存入缓存区 

git stash save "备注的内容" # 保存当前未commit的代码并添加备注,类似于git commit -m "commitMessage"

git stash list # 列出stash的所有记录

git stash apply 1 # 应用第二条stash 1 是 要应用的改动在stash 中的位置,可以理解成数组中的下标

git stash pop # 删除缓存堆栈中的第一个stash，并将对应修改应用到当前的工作目录下

# 删除最近的一次stash
git stash drop

# 删除stash的所有记录
git stash clear

# 应用最近一次的stash
git stash apply

# 应用最近一次的stash，随后删除该记录
git stash pop

git stash push  文件夹路径 文件路径 -m '缓存信息' # 将指定文件,指定文件夹 按缓存信息 缓存进 stash 中
# =============================================================

```
我只想改变一个文件名字的大小写，而不修改内容
```shell
(main)$ git mv --force myfile MyFile
```
我想从Git删除一个文件，但保留该文件
```shell
(main)$ git rm --cached log.txt
```

### 删除远程 git仓库里的文件
```shell
git rm -r <path>

git add .

git commit -m "delete"

git push origin 分支
```
- git rm 一些其他的参数

```shell
# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```
git bisect 的使用 
```shell

git bisect start # 启用二分法定位

git bisect bad # 最近的一次出现问题的提交

git bisect good <commithash> # 较早的没有问题的版本

git bisect reset # 回到初始状态

```
git cherry-pick : 将其他分支上已经提交的commit 应用到当前分支上

```shell

git cherry-pick  已经提交的commit # 将其他分支上已经提交的commit 应用到当前分支上
# =======================================
首先把 commitHash 复制下来，然后切到 master 分支。

在使用

git cherry-pick commitHash

就能将提交复制到 master 分之上了

pro git : => 衍合与挑拣（cherry-pick）的流程
如果你希望拉取e43a6到你的主干分支，可以这样：
$ git cherry-pick e43a6fd3e94888d76779ad79fb568ed180e5fcdf

# =======================================
# 假设现在在 dev 分支上,要把 commitIdA 从其他分支拿到 dev 分支上 (其他分支要在本地,这个是重点) : git cherry-pick commitIdA 就可以了,另见 git pull 和 git clone 部分( 拉取代码的两种方式 )
# ---------------------------------------
  a - b - c - d - f   Master
         \
           e - f - g Feature
# ---------------------------------------

          #  从左到右是时间顺序即版本顺序

git cherry-pick  分支名 # 将分支名上最新的提交转移到当前分支

git cherry-pick  a b  # 将分支名上最新的提交转移到当前分支

git cherry-pick  a..b  # 转移从 a 到 b 的所有提交(但不包含提交a)。它们必须按照正确的顺序放置：提交 a 必须早于提交 b

git cherry-pick  a^..b  # 转移从 a 到 b 的所有提交(包含提交a)

# --------------------------------------------
如果操作过程中发生代码冲突，Cherry pick 会停下来，让用户决定如何继续操作。

（1）--continue

用户解决代码冲突后，第一步将修改的文件重新加入暂存区（git add .），第二步使用下面的命令，让 Cherry pick 过程继续执行。

# git cherry-pick 分支名产生冲突,解决冲突之后

  git add .

# 添加完改动之后继续 cherry-pick

  git cherry-pick --continue
# ==============================


git cherry-pick --quit # 退出cherry-pick
```
### 合并冲突

git pull origin acm_dev # 将别的分支代码拉到自己分支上

出现冲突解决冲突

解决完冲突之后 git add .

git commit 

最后再 git push 到自己远程的分支上

没有冲突直接 git push , 但是会产生一个废提交
### 分支命名规范
- feature-*:新功能开发
- bugfix-*:修复缺陷
- optimize-*:性能优化
- infra-*:工程化相关，例如：构建脚本、配置文件的修改
- release-.*:发布分支
- chore-*:你也不知道如何归类，就用chore吧
### commit 信息编写规范
|类型	|说明|
|:---:|:---:|
|feat	|用户功能的新特性（项目自身构建方式的更新，不算新特性）|
|fix|	用户功能修复（项目自己的构建错误修复，不算功能修复）|
|docs	|更新文档|
|style	|代码格式化或风格变化|
|refactor	|重构（修改变量名、文件目录结构等不影响功能的变动）|
|test	|增加、修改测试代码，不涉及生产运行代码变化|
|chore|	日常维护，不涉及生产运行代码变化（写错个字、变更个版本号啥的）|

### 链接与资源
---
* 图形化客户端

- [GitX (L) (OSX, 开源软件)](http://gitx.laullon.com/)
- [Tower (OSX)](https://www.git-tower.com/windows)
- [Source Tree (OSX, 免费)](https://www.sourcetreeapp.com/)
- [GitHub for desktop (OSX, 免费)](https://desktop.github.com/)
- [GitBox (OSX, App Store)](https://apps.apple.com/gb/app/gitbox/id403388357?mt=12)
* 指南和手册

- [Git 社区参考书](http://book.git-scm.com/)
- [专业 Git](http://book.git-scm.com/book/zh/v2)
- [像 git 那样思考](http://think-like-a-git.net/)
- [GitHub 帮助](https://docs.github.com/cn)
- [图解 Git](http://marklodato.github.io/visual-git-guide/index-zh-cn.html)
### 评论
---

### 合并代码之一
<img src="./images/合并代码流程.png" alt=""/>

- 详见 : Pro git 3.2.3 冲突的合并
### 合并代码之二

```shell

# 假设现在在 dev 分支上

git pull origin master # dev 分支上拉取 master 上的代码,出现冲突

# 合并完冲突阶段

# incoming change 和 current change

#      ↓               ↓

# 拉取下来的代码改动   编辑器里的代码改动

git status # 检查一下个文件的状态 ,检查是否还有没有未合并的文件

git add . # 现在好像不需要了

git commit -m "合并冲突的信息" # 结束 merge 代码

git push origin master # 将代码提到 master 上 


```

### 与上面的 合并代码之二 对应起来 :

```js
<<<<<<<HEAD

current change

=======

incoming change

>>>>>> 9b8ee9e28246d7945df3dda64a852cb8eb89edfd

------分割线---------

// 当前分支上的为 current change,其他分支上的为 incoming change

// 代码冲突的来源:同一行的代码不同即冲突
```


git config --global --add safe.directory C:/Users/DarkAngel/Desktop/resume
Set the environment variable GIT_TEST_DEBUG_UNSAFE_DIRECTORIES=true and run
again for more information.
fatal: detected dubious ownership in repository at 'C:/Users/DarkAngel/Desktop/resume'
To add an exception for this directory, call:

        git config --global --add safe.directory C:/Users/DarkAngel/Desktop/resume

Set the environment variable GIT_TEST_DEBUG_UNSAFE_DIRECTORIES=true and run
again for more information.

-----------------------------------------------------------------------------------------------

Git config——global——add safe。用户目录C:// DarkAngel /桌面/简历

设置环境变量GIT_TEST_DEBUG_UNSAFE_DIRECTORIES=true并运行

更多信息请再看一遍。

致命的:在“C:/Users/DarkAngel/Desktop/resume”存储库中检测到可疑的所有权

要为该目录添加一个异常，调用:

Git config ——global ——add safe。用户目录C: / / DarkAngel /桌面/简历

设置环境变量GIT_TEST_DEBUG_UNSAFE_DIRECTORIES=true并运行

更多信息请再看一遍。

--------
```
git mergetool

This message is displayed because 'merge.tool' is not configured.
See 'git mergetool --tool-help' or 'git help config' for more details.
'git mergetool' will now attempt to use one of the following tools:
tortoisemerge emerge vimdiff nvimdiff
No files need merging
PS C:\Users\DarkAngel\Desktop\resume> git mergetool --tool-help
'git mergetool --tool=<tool>' may be set to one of the following:
                vimdiff          Use Vim with a custom layout (see `git help mergetool`'s `BACKEND SPECIFIC HINTS` section)
                vimdiff1         Use Vim with a 2 panes layout (LOCAL and REMOTE)
                vimdiff2         Use Vim with a 3 panes layout (LOCAL, MERGED and REMOTE)
                vimdiff3         Use Vim where only the MERGED file is shown

The following tools are valid, but not currently available:
                araxis           Use Araxis Merge (requires a graphical session)
                bc               Use Beyond Compare (requires a graphical session)
                bc3              Use Beyond Compare (requires a graphical session)
                bc4              Use Beyond Compare (requires a graphical session)
                codecompare      Use Code Compare (requires a graphical session)
                deltawalker      Use DeltaWalker (requires a graphical session)
                diffmerge        Use DiffMerge (requires a graphical session)
                diffuse          Use Diffuse (requires a graphical session)
                ecmerge          Use ECMerge (requires a graphical session)
                emerge           Use Emacs' Emerge
                examdiff         Use ExamDiff Pro (requires a graphical session)
                guiffy           Use Guiffy's Diff Tool (requires a graphical session)
                gvimdiff         Use gVim (requires a graphical session) with a custom layout (see `git help mergetool`'s `BACKEND SPECIFIC HINTS` section)
                gvimdiff1        Use gVim (requires a graphical session) with a 2 panes layout (LOCAL and REMOTE)
                gvimdiff2        Use gVim (requires a graphical session) with a 3 panes layout (LOCAL, MERGED and REMOTE)
                gvimdiff3        Use gVim (requires a graphical session) where only the MERGED file is shown
                kdiff3           Use KDiff3 (requires a graphical session)
                meld             Use Meld (requires a graphical session) with optional `auto merge` (see `git help mergetool`'s `CONFIGURATION` section)
                nvimdiff         Use Neovim with a custom layout (see `git help mergetool`'s `BACKEND SPECIFIC HINTS` section)
                nvimdiff1        Use Neovim with a 2 panes layout (LOCAL and REMOTE)
                nvimdiff2        Use Neovim with a 3 panes layout (LOCAL, MERGED and REMOTE)
                nvimdiff3        Use Neovim where only the MERGED file is shown
                opendiff         Use FileMerge (requires a graphical session)
                p4merge          Use HelixCore P4Merge (requires a graphical session)
                smerge           Use Sublime Merge (requires a graphical session)
                tkdiff           Use TkDiff (requires a graphical session)
                tortoisemerge    Use TortoiseMerge (requires a graphical session)
                winmerge         Use WinMerge (requires a graphical session)
                xxdiff           Use xxdiff (requires a graphical session)

Some of the tools listed above only work in a windowed
environment. If run in a terminal-only session, they will fail.
```
### 可视化的差异编辑器
git mergetool -t opendiff
