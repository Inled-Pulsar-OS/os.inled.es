---
type: "idea"
title: "[IDEA] Broadcom, we love you!"
status: "Completados"
date: 2026-07-03T16:23:58Z
url: "https://github.com/Inled-Pulsar-OS/PKG/issues/47"
---

Add support for broadcom network cards.
Google Search Title:
====================

linux broadcom wifi driver

  

Google Search AI Overview:
==========================

  

Identify your specific Broadcom chipset using `lspci -nnk | grep -iA3 net`. Open a terminal and install the required firmware or proprietary `broadcom-wl` driver via your package manager. You may require an active internet connection through Ethernet or USB tethering to download the packages. [](https://www.reddit.com/r/Fedora/comments/1s0g7hh/broadcom_wifi_drivers_how_to_install/)

Step 1: Identify your Broadcom card

Open your terminal and run the following command to find your wireless network controller model and PCI ID: 

bash

    lspci -nnk | grep -iA3 net
    

Usa el código con precaución.

Look for lines like `Network controller: Broadcom Inc. and subsidiaries BCM...`. Note the `[xxxx:xxxx]` ID at the end, as it helps determine the exact driver needed. [](https://askubuntu.com/questions/55868/installing-broadcom-wireless-drivers)

Step 2: Install the Driver

Depending on your specific chipset and Linux distribution, you will need to install one of the following packages: 

For Ubuntu, Debian, Linux Mint, and Pop!\_OS 

Most Debian-based systems utilize either the `bcmwl-kernel-source` or `firmware-b43-installer` packages. [](https://askubuntu.com/questions/55868/installing-broadcom-wireless-drivers)

1.  Update your package list:
    
    bash
    
        sudo apt update
        
    
    Usa el código con precaución.
    
2.  Install the proprietary STA driver (commonly used for BCM4311, BCM4312, BCM4313, BCM4321, BCM4322, etc.):
    
    bash
    
        sudo apt install bcmwl-kernel-source
        
    
    Usa el código con precaución.
    
3.  If the above package fails, or if you have an older card, install the open-source firmware package:
    
    bash
    
        sudo apt install firmware-b43-installer
        
    
    Usa el código con precaución.
    
     [](https://www.youtube.com/watch?v=npDaYOgpDaA&t=5)

For Fedora and Red Hat-based Systems (RHEL/CentOS) 

Fedora users typically need the proprietary Broadcom driver from the RPM Fusion repository. [](https://www.reddit.com/r/Fedora/comments/1s0g7hh/broadcom_wifi_drivers_how_to_install/)

1.  Ensure you have the RPM Fusion repositories enabled.
2.  Install the driver and required kernel modules using `akmods`:
    
    bash
    
        sudo dnf install akmods "kernel-devel-$(uname -r)"
        sudo dnf install broadcom-wl
        
    
    Usa el código con precaución.
    
     [](https://www.reddit.com/r/Fedora/comments/1s0g7hh/broadcom_wifi_drivers_how_to_install/)

For Arch Linux and Manjaro 

Arch users can utilize the `broadcom-wl` package from the official repositories, or choose `b43-firmware` from the AUR for legacy devices. [](https://wiki.archlinux.org/title/Broadcom_wireless)

1.  Install the `broadcom-wl` package:
    
    bash
    
        sudo pacman -S broadcom-wl
        
    
    Usa el código con precaución.
    
     [](https://wiki.archlinux.org/title/Broadcom_wireless)

Step 3: Load the Driver and Reboot

After installation, the new kernel module needs to be loaded. [](https://hefnawi.me/posts/broadcom-wifi-on-ubuntu/)

1.  Unload the conflicting modules and load the new `wl` module:
    
    bash
    
        sudo modprobe -rf wl
        sudo modprobe -v wl
        
    
    Usa el código con precaución.
    
2.  **Reboot your system** to ensure the wireless card initializes properly with the kernel. [](https://gist.github.com/yeenbean/a859ff5f9f90a908cb366e4b14cad830)

For a visual walkthrough of identifying your card and installing the correct driver using the terminal:

![Miniatura de vídeo relacionado](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFRUXFxcWFRcXFRgXFxcVFhUWFxUWFxUYHSggGBolHRYWITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLy0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQMEBQYHAgj/xABLEAACAQIDBQQGBwQHBwMFAAABAgMAEQQSIQUGMUFREyJhcQcygZGhsRQjQlJywdEzkrLwFlNigrPS4RU1c3STtMIkY6I0VFWD8f/EABwBAAEFAQEBAAAAAAAAAAAAAAABAgMEBQYHCP/EAEARAAEDAgQDBAgEBQMDBQAAAAEAAgMEEQUSITETQVEGYXGRFCIygaGxwdE0QlLhFSMzcvCSsvFTYoIWJENU0v/aAAwDAQACEQMRAD8AupxYre4ZXlHpK5+l0vDSGoKI4ql4abxyuDiaXhphmcVyZ/GlyJpe4pfD4SWQZkRmHX9OtRvljYbOKtQYbV1Dc8bCR1/53TUycRzGhHMEciKlFiLhU3xOYcrhYou0pbJuVDtKLIyo+0oyoyodrRlSgEIxOeppMgT87+qJpqXIkJceaTlnCgsxsALknkBxNI6zRcp0cb5HBjdSdAs327tUzyFuQ0QHkvXzNctV1Dpn38l63gWEso4PX5auPU9FHiwqANsr80pkdmKBNOso0VFkXRWoS3CIg0qW4QymhGYIZDRcJM4Q7M0XCM7UOyNGiOI1H9HalUZqoW7lD6M38mlt3KM19OPzIjA38kUuUpP4hT/qRdm3T5UuQpwrqc/mQs3Q0mVSCohds4LksaSylBB2KLNRZOQvQhChCK1Ki6PLSXSXQyUXRmR5KLozIZKEZlubYKPk3xrohK9eUOpIOTk52TsmNpCG7wyk2uRrcdKiqKh7W3Gmq0MJw2Cactk9YWvb3jom++mGiw0Mbxpq0yRnUnRlc8z/AGRUMFXIX2cbrSxTBaWOnL4m2I7z9SouwrWuVw91yR4UJQrfsnbGHWFQ0qRlFswdlS1uJ7xGnO9YdTG5shuN16Tg9VDJSMDSLtABHeFQ5drriMZiJItYbqFa1gxVArMPAkcefGtChDsliub7RcJ0wc3fmnOer9lzlkWeiyLI+0HSjKjKUO1HSjKUZSuWlFKGlOylc9pS2RlVW3y2tYCBT0Z/L7K/n7qxsUnsOE33rs+yuFGR/pLh3N8eZ933VRVudYgbzXe1BAtEzYfErrPTrKrZHmosiyAaiyLIZqSySyO9FkWSiR35mk1UUkojF3WCVGEHNvdqaa57We0bJacVdV+Ghc7v2b5mwQEC9CfOoHVjBsLrcg7L18us8jWdzRmPnoPmu1AHI1C6skO1gtWLshRj+q5zz3m3ySi26VA6olP5lox4Bh0fswt94v8AO6UyVEZX8yfNXGUVMz2Y2j/xH2RZaTOeqmEUQ/KPIIuzpeI4c011PC72mA+4IdnTxUSDZxVWTCaCT2oWf6R9ERjqVtbKOd1nS9lsMk2YW/2uI+6TbDjoKnbX/qb5LMl7JPbrTznwcL/EfZJNhR5VYbURP2NvFY9RheKU2r4s46sN/hv8Em0BHKprFZ7KpjjlOh6HQri1Ip7o7UiLoUIRi1CTVHZetGqT1luLwR/ya6EPevNXQ04T7d+NBKcvHIed9LrUFUXFmvVa2BNiFScm+U/MJj6TgPo8F/8A7qP+CSqsHthb2KfhnKMaMcga22uXmUgsdAuOxvT81lG25U5hN1cPNErSqWJvfXTifCsuoq3h5aLWXc4Vg8D6ZkpvmI1se9QEezk7aeGPurE4UePdB/OrMFVduoWVieGcKY5TpyurPgt1oSqsxdiQDxAGo8Bf41WkxCW5AsFs0nZ+lMbXvJNwDvYfBOv6MYb7h/ff9ai9On6/AK7/AAKh/R8T91D7c3dWJGljBZV1ZSdQo4lTztxt/wDyrMNe4nK/zWRiPZ9rWGSnvpyP0ULhI0dkHdszKNCeBIFX3vcGkjouZgjzzMY7mQD5qx7Y3fw8UEsoDfVxu/rfdUnp4VltxCa4uu0l7PUoYct7201VY2b2UgiYmwdkFr/fYKB8a0XzOEZd3LkIKYvqWwnW7gD4X1+CX3v9H2Djw2KxX1pkSKSUXk0zKhYXFuGg0rnpfXJc7cr1KkeaVgZFoALBUfcDZeCxMvYYnOGcXiZXygsBqhFuJ4jyI6VE03NinGU8lPekH0dx4bD/AEnC5yIzeZWbN9WftjT7PPwJPKnub0Q2U81C+jzc/wCnSs0lxh4x3ypsWcjuop+J9nWmtF050lgnnpK2Js/Z6JFEJGxMuqqZLhIwe9Iwtz9UDmbnkacWhNa8kqjoCeApgbdEkrIx6xTyHC9f9KrS1cUem57vutCkwaurNbcNnV3tHwb97J0sVqz5K2R+g0HcuoouztDTHMW53fqdr5DYeS6yVUzLeGmgR5KLoujyUXRmQCUl0ZkfZ0XSZkMlF0ZkeSi6TMhkoujMh2YoujMuXKj1jb4n2CrtJQy1J00HUqjV4jHT6HV3T79ErhXjY6KfMkaeYFbAwmJm5uqDcRll528P3R7RCLwUG/NRb/zt8KX0RrfYJH+dFQq2xzjLOA/xAv5ixHmox0VjYML9LgH2cmqN5dELyC46j6hYrsJBdakksf0P1B/td9CPem0sTCnNyuGZpuFSe50T+HO0sd0Ox8DsUjmpbKSyPNRZFkM1FkllvHYg1vZivL+A07qR2FGBKdfsn5rVaqJLPetnAY2tqTb9J+YUf6TTaCD/AJqP+CSqsAu8LexM2pnFM/pnXX2VsCJedmsN7WXLYlOY+FLw3JOOw7hW7YJBgQjhY/xGsipFpSvQsG/BR26fUrPpJyMdjRc/tR/hpV+iZdi5jtG5wnsCtJ2cfqo/wL8hWZL7Z8V2NH+Hj/tHyWT7MMjSzS/SsQGWeUL9a5UASNYZSbZeVuFaMFMx8dyFyeJ4tU09SWsOgWtxHOgJGjKCR5jWsxwsSF2MT87A7qAfNZrunAlkBY3SXJ+5JYfKtdsrzCfBcNNDHHXt1/MPmrzvZ/8AQ4r/AIE3+G1ZDdwu6k9krI0ls+z4gfWnwzt5LNHYe/5Vdr6izGx9VzOAU+apknI2uB4nf4fNapv7/u3G/wDLT/4TVQOy6ledcJEQqsGsRYgg2II1BBHAg63qAuT+O0brftxN5Fx2GtJlMyDJMthZgRYPl+6wvp1uKma64UQe13spbFy4TY+BZguWKO+VL3Z5HJyoCdSxJtrwA6Cl2TieZWB4qSbEzvi8S15JTe3JV+yi9FUaD9TUMs7Ixd3krNBSVFe7JTN0G7z7I8Op7gnkKoKx56uWXTYdAu3w7s/BRnPbO/8AU7f3Dl/mqXDr1qnYrasUdx1pLFJqjsKEiBWi6W65KnrS3CW4RWNLoi4RFrcT8aUNJ2CaXNG5RdoPvD3il4buh8kzjxfqHmgHHUe+jI4cinCWM7ELoU1P0XE0oUFmOgqemgM8gYP8Cq1lU2mhMh93eVDJj7kswvc9fh/pXXtswWGwXDNJLsx1KdiYtzt0UafCwsfHjTXElW45Oqddl3SQFv5ZmPmb6+6odireS7b2UJi4pMwaMDQ30WxHha9SNs71VnStLj6qsCLmQMePMedY1fSehkSRGwK6CncyuaaerYHaXv8A5sddwm0+F5/z7aSCta/R+h68lgV/Z6opLvpbvZ+k+0PA8/n4pk6W41dIssaOVsguP+PFc0ikW8vm6Vuiy8yeJOid7vg9sbj7B+a1DV2yDxWn2fDvSiT+k/MJv6R8JJLBCsaM5GIjYhVJsoSS5NuA1GvjVOAgPBK6PE43SUzmtFyo4bNm/qj+6a2PSI/1Lz04XV/9N3kUT7OcC7LlHDUEa+2gVDTsUjsNqGC72kDvCt+w0ywIPA/xGsmpN5SV3+Dty0UY7vqVQeyQ47HFjb60c/8A20q7RucGaLncfawz+stFwH7JLcMq/IVnSe2fFdbSW4DLfpHyWXbFVPr73v8ASJ/8Vq1qUnIFwmN5fSXXWpYH9mn4V/hFZMntnxXeUv8AQZ/aPksr3ZADMx5Yhzx6Sk1rw3MBHcuFxGQMxEOPJw+a07bWFMuHmiXjJFIg82QgfOsYaLv3C4IWBbNEhx+GVkdWXEYdSrKQVCTIDcHhwJ9tMqJOJJf/ADRJhdO2CAg9Cfe5bZv7/u3G/wDLT/4TUp2T1572fGzhEVSzNZVUcSx0AHtqA7pDG0re91tiRbNwjNIyhsvaYiQ8BlFyL/cUXt7TzqZrbBIGhuyWgmwu18DcAtDKLWIs6Op001yupAI9nEUtwdk9zCNHDz6LFds7Jlws74eSxZdQ1rB0N8rjztw5EEcqw6iMsf6y9Kwmqhmpm8IZQNLDkmgjPhVfMFp5kOyPhSZglzBGI260mYJLhGzZeJtTmsLzZoUM1RFE3NIQB3pFsd0uatMoHH2tFg1HaKBmkTS74D7/AASTYtzzt5VabRRN3F1izY/VP9mzfAfe6QdmPFifbVhsUbdmhZ766ok9p5PvSeSpVXLr7oZaLpLhC1CVGCRTS1p3CkZPIz2XEeBKb7SmYhQSSL31PS1TUsLGkuaLKd1ZNKA2RxIHVNBizoAbDnb8zxPvq6lL9LBS2yMBJI3dXiftfPSopZQwJWXBurpg9yu0N5WtpwF7e69ZklURsredz91KbQ2NFFEcq6gEX8cpAPvtTaWocZRdTssFTsFMHVutrj2Ek1fxRnEpz3arQopWiVp93mur+FckujSE8IblV6mrHReq7Vvy8Fz+K4DHVnixHJJ15HucOfjuo98IwOlbLCHjMw3C4eaZ1M8xVDS1w5fUHmCtvyt9+t646LzCzz+ZOdm4oQsZJX7oU8ATrcchryNV6kZmWaOa1sFkEFSXSu0LSPfcJf8Ap1gf6x/+jL/kqhw3dF1vpsH6kX9PMD/Wv/0Zf8lLwn9Enp1P+oKC3t3ohxCQphpGLidGYdnIvcCuDqygcSKlhjcHahUMRq4HwENcCVORb04bDxosrkNY8I3bmfuqaWeJ+ckBR4ViFOKZrHO1G/mqrgMYkmJxcyao8gKEqRcZFHBrEag1apWENsVg47URvmu03VsO+ODhCpJIwYKLgRSNy6qpFU5IX5joulosSpjAwZ9gB8FTdgS3WVhezTSstxa6s7EGx4aGtKmbZguuMxmbNUksOiuR3xwcQVJJGDBRe0UjcuqqRWbJA8OOi7SjxOldAz19gB8FSd3xdHbk0kjC+mjOSNPI1qUwIYAuHxiRr6pzmnRXDCb2RwpbEkqFH7QAstuWYDUH2WrPqqbIS4bfJdTguNMna2GX29vH90qd/wDZg1+mw/va+616pXC6VVrfP0j7PlwmIw8MjyySwyRrkifLmdCoJdgBa5pCRZJdVX0bY7BYVvpGLlyuoyxL2btYkd5+6p1toPM+FRstdIXAC5Tz0m77x41I8JhHZomOedsrJcKe5HZgCRfvHyXxqKoqA1vqlb2F4U+aUGRth3pH0ebxrgZSshIgcd6wJyuo7rhRrr6pt1HSqVLU5XEO2K6LG8K9IhDoh6zfiOn1Uj6RN5dm4yENFOfpERvH9VKM6kjPGWKW14i/MDqauVBjkZusLCW1VJOCWnKdCqOCetYpsu9BBF0RcjnTmMLzZoUU9RFAzPKQAk3mPLSr0VG0avXIV3aV7iW0wsOp39w5JAg1dADRYBc3LM+V2aQknvQyU66juEXZ0XS5gi7OlujOgUoujMiy0JblFpSouURIosl1UdtdtB7fyqzBpdPZumWBjZnGl/5t86lc8AKZp1Ws7r4LIo0ubcf9TpWZM/MVZCt0KEj/AFP6j5VSfqp2mwUbvDG3ZMF1IGYWPMG/5UyI5ZAVLmu3RZ1uql55NRlXO2vGxB0APPWtiqltAQeafBcu0TwLXKXXZXQy0XSXRGLwpQ8jYprmtduAVpHbivTci+TeIj+k0nDThO4LgzDoKOGEvpD1z2inkPdS8NMMr0Ay9B7qXIm53IzIDxHwpMiA9wQDilypC4ndcsy87UZUAu5IBxypQEw3O65YrztRZKMy6BFFkalQu92IUYci/rMq/G5+VUcRJEJHUhbnZ2IvrQegJ+n1VB7nhXPi69GlBvboAjuvhS2KjF10pFQzuLYzZbOA0zJ61okFw27rd42+OvuXQtytWUvSrALvKaS4S3CAiozJpy9EnJJbTnVmCmdJqdAsXE8aipBkZ6z+nIeP2SJetRkbWCzQuEqaqaqfnlNz8B4BFmp1lXQz0tktgiBJ4UuW6a5zWi7tEqmHY8SBQ4NYLuICjildOctPG557hp57JQYUeJ+FV3VkDeZPgtWHAsWm3a1g/wC43PkLrsYUdPnURxGMbN+KvM7J1Z/qVAHg37ldDCDoKZ/FB+j4qb/0i7/7LvIfdEcCOgpRijebPimP7JzD2Kk+9v7pN9nfzf8AWpm4lAdwQqsnZzE2ew9jvG4UZtjAkRm3UW06kDj7auQzxPPqO9ypPpqyB3/uIi0fqBuPh9UMFio4FW8ZZiFJtoBY3GtDtSkL8qvOwd7IpAEVMjchp8KrPjspmS3TXeXamIdjFGWCgXIBC5iBe2Y8z0FIwNRI5yW3Pw2IVgTfKw74LE9dCp5/rUE5apaYOBSe0sEmFxE7cmQlbcg+jD2amnOL54Mrd1qRSxwvD37XCao4IuNRWE5jmmx3XUseHtDmm4XXspqdqjv4UJFdM3SvV7L5OshrS6JbBWXcuUgyIeYDD2aH5isvEWj1XDwXW9lpheSLwP0P0SHpKzLFBIvKYK34XRv/ACC++q1E/LJbqtfHIGy0xJGygcNGzuqj7RA95tetx7mtaXdFwVPDxpWxjckBWLG7r5I3dZCxVWYLl4kAm3HnWY3EdRdq6mTsuwNJa8k8tFUYMVnUMOBFxWs3KRcLlXxZHFpWl7Aiy4eIf2QT/e7351zlS7NM4969IwuLhUkbe6/nqs3xe02m2jiTmuiSCJRyHZhVb/5Bq06Fp4RXN42GmraedwtVm9U+R+VYq7IrGNg41mgVmNyRXTwjMwErzOtga2Yho0W0R8B5CuZO69Lb7IUA+/OzQSDj8MCDYgyrcEcRxpE5c/082Z/+Qw3/AFk/WhCx/wBGeJz7WhN7gy4gg9QYpiCPZSZeafqAbLWfSi5Gy8SRxtH/AI0dRzAFhBU9C8sqGOG91jkSaDyrmSdV6Yx12gpjjcYB3VOvM/kK06SiLvXftyC5/FsZ4d4oD63M9PDv+SYZ61g1ccbk3KGelsiyAN+FAbdI4tYMzjYJ5h8GTx/099QT1MUHtG56D/NFNR0FZX6wNys/W7b/AMRufkpCPCgVlTYlI/Rvqju+66ij7MUUJD5v5jurtvc3bzulRFVAvJNyujYGsGVosOgR9nTcydmRiKjMkzI+ypMyMyHZUZkmZDsqMyMyQxsYsL82A9p4fG1WaVzs5LdwCfLVZ+JFhhDXi4LmjzNh8Sl8NscPYgXZdOXT46GteKo4jA5cjVUnBlMfTbw5KR2fsMRyRFgAFYZVHnc/OnF9wVE2OxCtO1NkQk5nXTQk9DwvVYOINlZMY3TjDwRQrdPnTJLndPYAAqN6QcZpHY+uWzeIS3+ardC3dQVTr2CqWBx5jPVTxH5jxqeqo2zt6HkVLQYg+ldbdvMfUKz4eRXUMtiD/Nq5iWN8Ti1+hXYxTMlaHsNwUpl8KjT7q3tavWgvlIXXN/EUtktlJ7t4wriEBtZrqfaNPjaqlbFmhJ6arZwKQRVre+48/wB7Kf39w2fAT24oolH/AOphJ8lI9tYsRs8Fd3Vx8SFze5QW5JMsqtbRUze06D5k+ytaucGw+K43AqMGtzfpuffsFe1cEkAgkaEdLi+vsrFXdLJooTFPNhQPUlKp+Bzmj/8AiwrepHgw5jyXA4rRWq8o/MfmtSxUywxM50WNCx/Ci3PwFYW5XeABjbDksa3WkJQOwGaRy7Hxdsx+JroaeLLD7lwNe/iVl78x81tU/qt5H5Vzq9AWH7tkfRk8q6imB4YXnNff0hy3KLgPIVzB3XojfZC85t6OtpFpD9CbV3I78OoLEg+v40t1O1wCb4/cbHQxvLLhGSNFLOxeIhVHE2Dk+6lBTg4FOvRaLbVwnnL/ANvNSnZK62UrXfS05GycURyEf+NHURaHCxUUTyx4cFgb7XkZbaAW5Cx99V48NhY7Nv4rdkxeoezKCB4bpp2lX8qy8qHa0mVJlSuHVnNgKCA1pc42A5qNxs4MaMzjsBuf271ZMDsnKLtx6fqedc/V4tm9SDQdeZ+y6DD8Ba0iWss53Jv5W/c95UiIKxy9dOH2R9jSZkZ0OxozIzodlRmRnQ7GkzIzoxFRmRnQ7KjMjOh2VGZGZJYnCZlt4gjzBuPjU0E/Dff3e47qrVRCaPL3gjxGoXbyNERIvL1h1HX2Vbw6cB/Ddsfms/GIM7BM3du/h+yd43aLsFkjClhwuSLe6tprLbrnOIpfZGMxU+j5FUetYZi2mgueAqGRjW6qwyRzkq2HZZLEgra9r8PZ0qB+yGk5rFU30iwEdiQDYZwfM5G/X3Vcw9w9YFMnGoVJMlaeVQ5U4we0niN0Nr8QdQfZUE9HHOLPH3VmnqZac+ofdyT47yy9E/dP61S/gsHU+f7K9/GJ+g/z3rTC5/m1dzlC8DsERfwPwpQEtghFOVYMAbqQw8wbikczM0g81JE7hvDxuCD5LVe7LH1WRPerD9DXJkFpt0XprXB7Q4bEKr+jTANFhmzjvZ3jN+YhYpf94NVmqmz5R0HzWfh1JwDI7m4/Af4VGbh7bM+Pxz37kr/V66Wg+rW34l19lK+C0Af3pYqsGrdD3X8lI7Y2Uf8AauGlA7siNn6BoO8pPmGA/u0Qz5Int6pKqjEtRFJ0Py1C79KeO7PZ8ig96ZlgXxznvj9xXqGFuZ4Ct1UmSJzlR9nRBQi34ZfyrqLWjt3Lz7MXTA9/1WxTeq3kflXJL0lYXu6P/Tpryrq6b+mF53Xf13LdouA8hXKndehN2CzaX01YEMy/R8WcrFSQkNrqSDb67wosVJlKh97fSxhMVgsRho8PileWJ41LpEFBYWBYiUm3kDRlKMpVT9FV/wDauE85f+2mqQj1VM72Ste9L3+6MX+GP/GjqMbqBu686qdOFT2VsW6o7+FFke9K4TDmRgqjU0172xtL3mwCLSOIZGLuOgH1PcNyrnszZqxDT1uZ/IVydfiD6l1tmjYffvXV4dhrKRtz6zzu76DoE+C1m3WnddBaS6S66C0l0l1xM6oMzMFHUmw+NPYx7zlaCT3JjpGtF3GyhcXvTAmi5pD/AGRYe9rfC9asOC1L9XWb4/sqEmJwt0GqjJd8W+zEo82J+QFaDOz7B7Tz7gqrsWd+VvxSB3tn+7H+63+apv4FTdXeY+yiOKzdAlI975eccZ8sw/M0x2Awn2XEeScMWl5tCfYffCM+vEy+KkMPjY1TlwCQf03g+On3VhmLNPtNI+KmsDtOGX1JAT04N+6dayp6KeD22nx5eavRVUcvsuTxgLa2tzvwqs0G+imcRbVQjz2LLE63HC1mBBFwPMXrraV7nxNLxrzXGVLWsmc1puOVkisjtYSTSn+yoZbeGmlSkBI2ytmEVEjVgMoFr+J8TxJqjIdbKfS9wmO9syHBs0nrl0MfXNm1t/czXpKcHiaJahw4WqzfExA3OYX/AJ9xrYjly6FUmS20KatccRVlrg7ZTtcHbLnNT0tltBmFdDlXi+RDtqMqMi5MtLlS5Fom52M7TDKOaEofZqvwIrnK+PJOe/Vd9gs3EpGjm3Ty2+C5322p9FwM8q6NlKx/8WU5ENvxMCfI1UY3M4BaMjgxhKzPdKT6N2LclIJ/CdG+BNdM6nzU5Z3Lh2VWWtE3Q/DYraLA2PHmD+lcuu83WX+lTG9pjMLhgdI1adxyzOckftAWT96tLDYs0l1jY1Nkhy9VGQSHMvmPnXQPb6p8Fx0Q/mN8Qtin9VvI/KuNXpSwXd9//Tp5V1tKP5QXn1c3+eVvcXqjyFcmd137dgvIszfWS/8AEk/jarDBcK7GNFxnp2VSWVs9FDX2thPOX/t5qbILNTJR6hWxel//AHPi/wAMf+NHVcbqo3debg+nGrYCvgIi9LZOsrJuQgMkhPEKLe0m/wAh76wcec5sTANifktXCWN4jnc7fP8A4VxEQrl7lb+YoxGKEmYoyANeFAFzYJCbKr7Z3sVbpAAx5ufVH4R9rz4edb1Hgjn+vPoOnP39FlVGJBvqx69/JVLF4uSQ5pGLHx5eQ4D2V0cUEcLcsbQAsiSV0hu83SF6lTEL0qEdj0NCbmb1RGhKCDsivQlslIY2Y90Enw5e3lTXFoGqC4N1JU1iMTN9HaOWQMNCLjMwIIIGbnfhzrJNNCJRJG2x+Hkmz1z3xGIm470y3QVw8jnTS1uVwelTONjZUotdVcY9sgfYNxSFimBTzD7RZ2DOO4NbeNVnxhSsfY6qtbZmbGTsyAiJe6pbgLesQPE3+FTxMyNsq8snEdcbJXC7LiS117RvEXHsHAe2nlRAKS/2FDKveXI39k/McKZnc03Clbpqq7jN0sQrEIBIvJrgewg8DVttUy2qsiQc1ohk867Cy8fyrntBS5UZSh2tGVLlKktj7zPhA5SIS5rd0vksRfW+U9ao1tEZwCDqFsYVX+ikhwuCo3eneSfaCxRPAsMaSdo1pS+chSFB7q2AzHry6VUpsNex4LlpVmLMkiLWJDOOlbmVczYqxRekGeFEjXCrLlULmMxQm2g0yHl41h1GFOLy5h0K6ekxlrYw2QajRVWfFST4mbFyqFaQrZQ2YIqqFCg2F+HTmau0NIYRqs7EqwVDhl2S6S2IPQg+6r7m3BCzWeq4FWTE+kqfVVwKEcL/AEgj4dlXPOwh4OhXVNxuIt1FiqZsuApEqHiBW7AwsYGlc5UPD5C4K17V9K80C5hgVdRYX+kEcdOHZGudqcOfEMwNwusoMQbVOEYFjb5LD2kzMzHTMzNbjbMSbX9tQtFhZdCxpAsivTk9S26u3PoWLixQj7Qx5zkLZM2aN09axt61+HKmvbcWTJGlzbK272+ll8dhJcIcEsYlCjOJy2XK6t6vZi/q2486gERuq4gcCs8DVYVsAodpSosnmyNqGCUSAXHBh1U8R58D7KqVtKKmIxnfke9WaWUwSZx71pOBxCSoJI2up/mxHI1w80L4XljxYhdLHM2RuZuyVlYIpZiAoFyTwApjGOe4NaLkpXPDRcrPt4t4mnJRLrEOXAv4t4eFdhh2GNpxnfq/5eH3WDVVjpTlbo35qCzVqqlZKQxMxsBS20vyUMkzI9DqeQGp8lY9nboyvq/dH9rj+6PzIrLqMZpYdG+ue7bzU8dBWT6m0Y79XeSnsPulEvFmPlZR8ifjWVJ2gnP9NrR8SrjMAg3le53vsPh906/o3h/ut++361XOOVv6/gFMMCoR+T4n7pOXdeAjTOPJr/xA09mPVYPrEHxH2smOwGj/ACgjwcfrdVfaGy4kkZQSwBt015jTjW9DWSTRBzmgE9FiSt4EpYx5cB1siQgCwFh0ApDc6lQFxO6TaEyOi3ICkObcbg939fZUsLLm6Y43SuKniWUkSGMMe/lXPr5E0r2NJ1QCWDRT8GHwxALTuQR9mM3+RpOCeSlzOUlNisGI8ixy2HrNI2UnkFVVPEnnppfhe4YKcg3JQ6Q2soWJQihQAB0HAUw6po0CItrSoT6DEG3HWm5U7MnMWMNtaaWJcyX7WvQLLzHKue0oS5UDJSpcqIuKEZUQa5sBc8hzprnBoLnGwG6cGk6JU4WT+qk/cb9Ko/xeg/67P9TfupPR5P0nyRHDSf1T/uN+lH8XoP8Ars/1N+6X0eToVy2HkGpicD8DfpStxWhcQBMwk/8AcPujgSdD5J1sbZ/bk62VbXPMk8APdWV2i7QDCo25W5nuvYcrC1yfPZTU1LxSb6AItvYEYfI2a6u2UX4hrEgeNwD7qq9nu1AxNzopGZXgX02I+hUs9CWDM03Cjs9dcqOVMdtx54JF/s3Hmuv5VXq2Z4XBaGFycKrjd3289Fn+auaXotkd6EWQvQiyF6EuiKi6TRC1F0qFqS6Lp1gdoSwm8UjJfjbgfNToagmpopxaRoKfHM+P2DZd47ak02kkrMOmgH7osKbBSQQaxtA+fxSyTySe2bplarN1FdSexNjPiHyqNBxJ4AdT/OtQVNVFTR55PcOZ/bvTWCSd/Ch35nk39+5aLsnYkUAGUXbmx4+zoPKuQrcRmqj6xs3kBt+63qOgiptW6u5uO5UllrPV66GWhF0MtCLridsqs33QT7hensbmcG9UyR+Vpd0WYJMSbk6nU+2u3ygCwXCZiTcp1HSJVFdrJJK6R8zbToNONTMvawTdSdFNJu8AneY5jxPIVJwwpeFopfY06QgI2V2HLr4VKLAWTHC4AumGKLyYnM/Ad4dLnTh4fpVea4RlsbJzI1VQnlcxak+HzpyRLRyUWRdcme3Olsm3Upmru7Lz6yGekRZc9pQjKiL0qXKlsA31sf40/iFUMU/Azf2O/wBpUsQ9dviFfZpQqszGwUFj5AXNeAsYXuDW7nRb4F1ALvtgjqJG/wClJ/lrcHZnEj/8fxH3QdNCUjjt8cI0UirI2YowH1Ug1KkD7PWp6bs3iTJmOMegIO45HxQCOZChN2dqyQIDkL3AzLex04EH2mvQcdwRmJ07Mz8r23sTtra4Pl7lmslEcrrbJLb+1ZsU8YMXZRI2cAm7M9iLk2AAAJ08apdnuzooZDIXhzjppsArM9QwMIHNDK3Q+412PGj/AFDzWTkPRcE8j7akuCEgBBVDnwjK7oFJykjQE6cuHhXJT2ieWuNrFej084kibJfcD90k8TL6wIv1BHzqNrw7Y3UocDsuLU66W6FqMyLoWoui6FqS6W6FqMyS6FqLoujtSXRdGqXIA4k2HmeFBcBqUb6Ba/srZywRrGoGg1PMtzJrh6upfUSmR/u7h0XRU0DYIwxvv7zzKd2qsp7o8tCLoZaEXQy0Iuo7eKQphZmHERt8Rb86s0TQ6oYD1Cq1ry2neR0Ky+NuHsrslxqkw2l/An3U1KoPZuNdDnW1zc++pGuLdkgNjcKShxM0zWLXBvfkBcEXp13OS3LinWHMcEgLNmsM2nwpWFoN7pfZcpBcTnOe1rjQeFRyuzFOLrm66J99RISiaUJFyzWpUiZuSTpTrJqsBNdyuDXJakS2RZqEWRXoS2S+zz9bH+NP4hVHFPwM39jv9pUkQ9ceKvuPiLxSIOLIyi/C5UgV4JTvDJWuOwIPxW6DYql4PdKdUVT2dwPvf6V6tH20wxrQDm/0/us+Wme55IXG0djSQJ2kmTLcDQ3NybDlWjh/aagrphDFmzG51Fhp71C6mkaLqT3KPfk/CPnWH2+/DQ/3H5KWi3KT9IMhBwwvxZ7/ALq1kdhXEVEoHQfMq1UNBiJKd7qbWv8AUOdR+zPUc18xy8PKpu2WB8N/p0I0Ptjof1e/n3+KhpZbjIU33r2S3aLNGpOchHUfeOiv7dAfZ40/sj2gbCw0tS6waCWk9BqR9R5J1RBnF27qYwsMWCw7O5ChR2kr9SABfx0AAHlXL4pWyYvXl7RubNHQcvuVYhY4NbHusX3g23JjJ2ne4XhGn3EHAeZ4k9T5V2mH0bKSERt35nqV0lLDwmWUfV26soUXQhRdCFCEKLoQouhChCNWINxxGo8xSHUWKAbFbFsnHLPEsqnQjUdG+0p8Qa4iogdDIWO5LpIpRIwOCd2qFSprtLaEcCGSVso5dSeijmalhgfM7KwXKjklbGLuKo21N+JmJEKiNepAZz+Q+NdBBg8bReU3PdoPusqXEHn2NFDPt/FE3OIk9jW+Aq8KGnH5AqpqZT+Yrv8ApLicjI0udWUqQ4B0IsbHjemHD6cOD2tsRrokfVycNzSbghR0L1bCyU/w7ZhY9CKUhC7wm7R07wsalEQ6pzY3OUni8KsCZVILHjryAJOns+NErrMsFKWBg0OqjuwhcuzP37kZeutgfdUUdgzVQO3TzNYCo0q6jm1osi6dhtKEqTc6UiEyRyb26mpExWEmu2XDIjQlRUiVFQhONn/tY/xp/EKoYp+Cm/sd/tKfF7Y8VoOLmyI72vlVmtwvlBNr+yvBYY+JI1nUgea2wLmyp0W/rMARgzY/+8P8lds3sPM4XEo/0/umOliabEphvBvG+Ki7H6OY7sjZu0Deqb8MorVwjspNQ1QnL72vpa2/vTTURAGxUvuR68n4V+dL2+/DQ/3H5KrSblJ+kTjhfxyfwrWP2G/EyeA+ZVyb+k5QKOQQVNiCCCOII4V6jNCyWNzJBdpFiD0WQ0kG4WlYKR2jUuuVyBmHQ/zyrwGujhiqXsgdmYCQD1H+c+e62GkkAlUX0oLPJ2cIGWEjPcH15VvZG6WFiBzvflXV9kqKGcSPB/mDl0Hd47f8qeKZsJDj117gsztXSrpAhQlujpEIqVCFIhHRZCKlQhSIRihCk939tvhZMy6ofXTk3iOjDrVSso2VLLHfkf8AOSnp6h0Lrjbors+/GFC3Gctb1Mljfpf1fjWCMHqM1ja3W/8AhWmcQitfVUXbW1nxMnaPpyVRwVeg8ep510NLSsp2ZW+89VlTTuldcpxsLd6XEm6jKg4ueHkOZPh8qWprIKUfzNXHZo+vRRRQzVDrRaAbuP06q2RbhxAd6VyfAKB7iD86yXdoZL+rG0D3n7K6MFaR60jr+NlDbxbmNFE8kb51UZmBFmAGpItofhVqnxiOc5HsyuOxG1+/oq9RhssTS5j8zeYO/mqlhm1IrRCylIYQ2NOKRWDEGRcMHRb8rjiADY1KDdmiOIWnKoPA4ZsQ1gGvzP8ArUTYy4ozJ7jNmRwlMr5n1uOQFv8AX4UsjQ3RKk5G4D+bVEhLwUIS5ehCQxU1lpEqjsFLdb35mnJqt5rt1wyKhKipEqKhCcbO/ax/jT+IVQxT8FN/Y7/aVJH7Y8Vfdr/sJv8AhyfwGvCaP8Qz+4fNbbdwsu2d+yXyFfQEHsBZE/8AUKcmplErJuR68n4R864Ht9+Gh/uPyVyj3KS9IvHC/jk/hWsfsN+Jk8B8yrkv9Jy63S2XnbtnHdU9wHmw5+Q+flW52yxs08focJ9dw9Y9G9PF3y8VSpornMUrvbvQ8E0cEADSXDy34CPkl+TNrryHmK5Xs/2f/iDXPk0bqB49fAfFaLi1jMzlOzxR4uC32XF1PNW5H8QP5isqN9Tg9d0ew2PQj7EJgs9vcsX3i2a0EzKwsb69L8bjwIsw869I48dTG2pi9l+vgeYK2sOmzR8N27fiOX2UXTVooUIQoQhQhChCFCEKEiFCVChCFCE42bhDNLHEOLsF8hzPsFz7KZLMImGQ8hdOawyODBzWyYTCrGixoLKosB/POuHllfK8vebkro442xtDWiwCWW17FgDx151LDSulaXBNfMGuyqsb/wC2Dh8PlUd+W6A2uAtu8b9baDz8Ku0FC4zXfsNfFUa+ryRWbudPBZTgzrr0rpgVzdlJQvqPdTkK4YXaMkOGLdmzRk2LZSQL6Xvy1502ORoNiU8xOtntopJ5W+gjsiilteADG9+Pwq2L8lCD62qo8asGbObtcgnyqm6909Lo4pEJVJKEJTPQhN8at1NAQoCLEFLrbgackWjGu2XDLg0JyI0iEVCF1DIVZWHFSCL8Lg3F6inhbNE6J2zgQfeLJ7TY3TzF7zYx1ZLQZWBU9x72YEH7fHWuLZ2JpY3hzXu0N9xy9y0W1jBuNVFYaPKoXoK7aNuVoCoyOzOLl2akTE62ftWWDMYghZhbvgkaeRFYuM4NDikbWSkjKbi1vqCp4ZOGU32ptPEYkx9sIwIySMisD3gAb5mPSqeEdnIsNkL43E33v3eACsyVLXMLQE/TefFRqqRJAFUWF1cn4OKp1vY6nqp3TPkeS43Oo/8AzsOSSKpa1tiFDRIxd5ZDmkkYsx8+Q8ALAeAFdFh9AyjiETNgLKOon4psNlK4Lbs8CFIshBN7OGNjztZhWXjHZqmxKUTPJDgLaW18bg7IgnyaHZRm255cWQZliUhbAorA8bre7G9jf3mkw7s+yiidExxIOuttD1Gg96tR1wjeHtG3yVQkjKkqdCDY1Se0scWu3C6qORsjQ9uxXNNT0KEIUIQoQhQhChCFCEKEIUIU1ua4GNhvzLD2lGAqjiQJpX27vmrNGQJm3WsMbC9cnG0OcATZbr3FrSQLphipoZe6Gv05MD4H8q1m0rojeI+exVJ8rZB63w3TbB4MP2mHmQyJe3eWwIsCCDyOvwq40kgO2KgAvdjtQqzt/wBHpBL4SUMBc9lIQH8lfg3tt5mrLKnk5UpaDnGfck9lbpGOz4sqANezVsxJ6MRoKeajNo1Nio8pvJ5KXx211mU4WMqisMhPIA6WohhDnguT6mqAjLWptt3ddEwwcTkNGtx3r3sOAFaTtljtcSUnuts/BTqqS9oZSSWs5F9TbQcvGsyaSRpuNlq00MMjdd033s3cOGe8QZoWFwTqVPNSR8D+lLDNnGu6jqaUxH1dlBxNpVhU0qrUIXM2ooCFAbQhIfTpTki0U12y4ZBELEAcSQBUU8zIY3Sv2aCT4BTwQumkbGzdxAHvT87PVpTGrEWW5JF9dOA9tc03Hp4sPFZMwHM6zQDbTW1zr09+66R2BQyV5pIXkZW3cSL66bbdUlJgBkZkkD5dSLWsOvGrEOOSCdkNVAYy/RpvcE+QUE2Bx8B81NMJMupFrEDzKaJA5FwjEdQpNbMlXBEcr3tB6EgLHjpJ5BmYxxHUAlcxxM3qqxtxsCbe6llqYYrcR4F9rkD5ojpZpb8NhNt7AlcLGSbAEnoASfdT3zRsbnc4AdSbDzTWQyPdka0k9ANfJFLEy+spXzBHzpsU8UwvG4OHcbp0tPLEbSNLfEEfNPNlbPMjgMrBCDrYgcNNbWrJxnFRSU7nQuaXi2hN9z0vdamE4Wamdola4MN9bW5dbWTRoSXKqCbE2ABJsD4VptqGthbJK4C4GpNhqFQfTuM7o4mk2J0Gp0KIwtfLlbN0sb+6nCoicziBwy9bi3mozTyh/DLTm6WN/JFLEymzKVPQgj50sU8cozRuDh3G6SSCSI2kaQe8WXZwsgFzG1uuU2+VRitpy7KJG36Zh91IaKoAzGN1vA/ZcSwsvrKy34XBHzp8VRFLfhuDrdCD8kyWnli/qNI8QR80mu7gxWciTs3RCR3cwewJCk3GXUAX141hY5KyF0bnD2iRf5XW/gXEeyRo1y2NvHeygMHu/PLhZMaigwxmzEt3vs3IXmBnFz51nE62WwZGh2XmpWPdREw+DxU8zZMTKqGOOImQIS12U3OY2UWAU+sOPApm3CZxLktA2UbtnZY+lSw4RJ5EUjKGiftbFQTmTKGAuTYkDS1KDpqntd6oLkxk2fMriJoZRIfVjMbhzx4IRc8DwHI0qXMN0rFsxxPFDNHJEXkjUhlKNldwpKhh48bEUl9EZha4Ulv1sWPC418NDmKhY8uY5mLOgJ4DUkngBQ03CZE8ubcqIxmz5ordrDJHm9XtI2S/lmAvSp4cDsuk2ViDH2ow8xjtfOInKW65rWt48KS6Mwva6LCbMnlUtFBLIo0LJE7i/S6gi/hS3QXAblT0OwUOzRj4GcTwTZcQrWsuq5GQWFgLqdfvN92mOAddrtimCVzZLeSuWwt4kxEYYA5x+0QcVNvWA5qetc4aFsUpbLtyPX91vtqi9gLd+aGI7OYkoVEo0BNxr/a61ZihMR0Pq9FFIRILjfqnbyukWrAtx46eypxa6Q3AULBinLZtPbU4aqvEN7qvb37wAnsla7Hjbl7qlYxVp5uSgdlubMvPiL1ONCqV062ni8yoSGUi+YG4GnLxqxKfVTRZWLcrdyX6vGhhrmIXwsQKzppBq0rUpKdwtJdXpcfraVdCOlxVMgclpE9Vn2+WFjjxH1WiOoYW4XuQwHw99X4HEt1WLWMDZNOaho6mVRdGgITOYXNOSK4mu1XDpxss/Wp5n5G1Y+PgnDZrdPhcX+C2cAIGIxX6/Q2+KfbNv9Jkv0b+JbfCufxctOBwZdvU/wBpXQ4SHDG582/rf7hb4LuAZopAYuxGW9wLXt1uNRVWoLYKynkZPx3ZrWOtr9LHTu79Vap7z0k7HwcAW3Gl7dbgf8JCfEMmGiKki5I+daFPRQVWMVLZmhwFrX9yo1FXNTYTTuhdlJ/dKM0ghh7AHX1rC/e04+F81V2spJMQqvT7aezc207vda3/ACpi+qjoab0Eb+1YX1037r3ulZsNmxLFWKkIC2X1iTpYDyt8Kr09YYsJYyVgeHPs3N7IA1ufA3/wKxPScTFHOjeWkMBdl3JOlh7rJPaBDQxls9u1APaABsut725VNhrXxV8zY8t+GTaM3bfS1r81HiJZLRROkzW4gvnADra3vbknoaX6SBr2WXSw7vq8z1vWUY6M4SX6cbNrc+tv06W+q0c9WMTDNeDl0sNNuvimGDzCGZoh9Z2hBsLtluOA9p+NbNbwn19MyrP8rhgi+gvY7/D4LJpeIykqH0w/mZztva42+KLZRkPbMwPbZBlzCzWseAPiBS4u2lb6PHHbgZzmynS9xuR70mFmpdx5JAeNlGW41trsPFFiyxwyma+fP3cws1vEe/4U6jbDHiz20f8ATyetbVt7f8fFNqjK/DGOq/bz6X0O/wBr/BSYnb6V2d+72d7eN+NYPosX8H4+X189r91tlt+ky/xTg39XJe3ffdRMkzSYNmc5isgAJ4/Z/wAxrooKeOlxpjIRlDo7kDbn9lgzTyVOEPfMbkP0PvH3TXdyfLOB94FfzHxHxrR7S0/GoHEbtId9D8Cs7s7Pwq1oOzgR9R8QrFssohTZhCiGaPELJbjnmN0N/IOPNlrFp3yVcT6q1mggfAXPn81rVUcdLK2AEl1r/E2Hl8lDbzuIsfsjAqbjDHChrcC7Sxrf3R3/AL1PbsSlj1a53W6l9mysu0ttMpsywxsD0IguD76byTD/AE2KL9GOPfEnGzzSvJihAiI6hDKsX1hPZAjKTmtx0vlvSuFk+dobYDZFvPtNHiwMbpjDImMiKzYqERMUzd9b2F+KcvsjpQEkbSCbW25KaXBj+kTvIlgcNmgLDRpFEStkJ0LBTJ5Un5Uy/wDJsOqid79oj6BioJ1x0hLApJiYFRY5MwsFkUAZdDwvxPI0DdOjHrgi3uUliTNj8MyIcXgZY8OVeJ4yMNIuWxAcrY3BsCCCBy0oGhTRZjuqa7m4uTEYPDYRfpeCkVS0U8cRMEo7xBdstvEgka89bUG17p0lg4u0KhN1cO0WD22shuEQxk8mlUTqSPEkr7xTjuFJJYuZZUKCVlYMjFWHAg2I9o4UrmtcLOFwrAcQbhaNh8FLlH0nGhm0PcjW404GSwJrNEcbHXjbb3m3ktFoc4Xe8fXzT3GYpSAgOgHHwoypzni1lRdvbcyjKjWHhxPlVpjVlyy8gqkwLOSeJsamAVYqRwEuo9x9tKmqy4++Nkw2GQgERksfG9jfxso99LJJYXSxR5nWVj2RiMRh1+jkd1BYHwqk8NcbrXic9gy9FY8DtqJlyyAe2oSzorAlvuqrvxFGI4ZI/V7SRfeAf/GpadxBIKp1rQWghVzDYRnGYC48xyq3mWblK6kwUn3flShwSFpSP+yJW1uo8CaMwRlKsZruVwqJWIII4g3HmKjkjbIwscLgix8CpYpHRvD2mxBuPEJxiscS+dboSADY8Tz/AC91ZNDg7Iqb0ae0jQ4loI2HL3/da9bi7pakVMF2OLQHWO5+32Cbz4t2FmdiOl9PdVynw2kp3Zoo2g9QNfNVZ8RqqhuWWQkdL6eSSeZiApYkDgL6DyqZlNEyR0rWgOdueZ8VC+plfGI3OJaNhyC7gxjporkDoDpUNRh9LUkOmjDiOZGqmp6+ppwWxPIBXCTsGzBiG63N/G551LJSwyR8J7AW9LaKNlVMyTiteQ7rfVdYjGyPo7sw6E6edqipsPpaY5oYw09QNfNS1FfU1AtK8kdOSNNoyqMokYDlrw8ulRSYTRSP4j4mk9bKSPFKyNmRsjgPFJQ4p0OZWIPMg8fPrViejgnYGSsBA2BG3h0UMFXPC8vjeQTvrv49UbY2Qtnztm631t08vCmNw+mbFwRGMnS2nj4p7q6odLxi85ut/h4IsRi3cguxYjhc8PLpTqejgp2lsLA0Hew3TairnqHB0riSNu5dfTpM2fO2a1r31t0vTP4fS8Lg8NuW97W0v1TvT6nicXOc1rXvrbokxiGylMxyk3Ivpfrb2CpfRouIJcozAWB526KP0iXhmLMcpNyOV1wjkEEGxBuD0I4GpXsa9pa4XB0IUTHFjg5psQlGxLls5Y5tCGvrccNaiZSwsi4LWgN6W013Ur6mV8nFc4l3XmonbCTGX6UsjtKCrZixLhktlZSddMo8rVk1uHZfXiGnT7LYoMRDhw5fP7pgu28SGkkE8meUZZWzG8igWsx5i2lZC2co2smuCxkkLiSKRo3HBkYqfEXHEeHA0JSL7p1tXbuJxNhiJ3lC6qGOgPC4UWF/HjRZI1obsFxidsYiQxs88rNELRMXbOn4XvmHDjeiyUNA0sl9pbyYudOzmxMkiaHKW0JHC4Fs1uOt6LJAxo1AXeJ3pxskZifFzMhFipfiOjEasPAnWiwRkYDeyGG3oxscQhTFzLGBlCh7ZV6K3rKOljpRZBYwm9k4k3jA2cuBjjKFpWkxEha/am4KAaXHBb3+4ONzRbW6TJ6+ZQFCeumlfk7AjgQxuLcLGkICCucRt7FEZHcnlew1HmBc+01HkCjMj9iVHwRFmzMb+NPATGtJKVxY7w8qCnPSi0qiUxu7i3OKiaPRmGT265vgBTHj1TdTQEiQWWhYfaDiQiRb24nlYVVIWnc811j5cPKUtx4aUmoTSQq5vRiFX6lTdV1/vEj5Wp8Qvqq1Q78qZbCk7p/F+QqYqspjNSJUhiMUENrX0vShIv/Z)

8m

[

Wi-Fi Not Working in Linux? Here's a fix for Broadcom ...

![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nys3NzcvNTctNzcrNzc3Nzc3Nzc1Nzg3Nzc3Nzc3KzcwNSs3NzU3Nzc3LDc3NS43Nf/AABEIACAAIAMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAFAwQGBwH/xAAqEAABAwMDAgYCAwAAAAAAAAABAgMEBREhAAYSMUETFCIyUWEHgVJisf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAExIRH/2gAMAwEAAhEDEQA/AGtzfkByp1BdNoNM8+zGS47IVztZKAbkEYtkG/8At9A0fc0ec02ioeFHkL9qQSUqzYAHsfo6w8GXKXKLMNSvEnNmOWWybupUr2H6ulOO4/eun1jYdARQo8BDwjbkbiIVwbdIDqxa90kkHvnroJlpHHHxbVN1Oc3xryZLYpcYealJ4tp481nKyBa/2TqJciKKHJqVQMtsJWEsllvmi56cyAeN+xNhoCtpR6JSEwd2sOIlloIakU5Sh4sdw4UtsX9RuLgfxUTe4tp7ef5Abq8KTT6MtcVbdlOvymBc2ylIByCT3sRY/egqjObpilO0ukeE06S226WCEqPYJAGT1+PnOrdP2pLdYclS5j7FWlEOyCtlCw23Yi3p9SbpBNr3PG1j11LfFmgmNsndbzbyquiFJQwPNNSWlKKVIKkqKbGx9nIpxx5frWgpmz6bGgOtKrVQqKVeEl5phQCCVEWCU5P9uvTWrg02n0aPJBedUqSEJkOvvE2AGE3GB1JsOnK/caD3BusQ2yijtIbybrKLKIyMJ7dSc56YxpEu8f/Z)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVR4AWP4//8/RXgwGMBgzA/EU4H4DBA/B+JPQPwfB/4EVXMGqocfZMAMkCSZeCrIgKsUGHAFZMAXrJIZbf//u+cQMuATA07JCcv+g8H2o///a4bgNASvAXDw4+f//xYJWNVR7AKKw4AqsTCdknQAS4nTgPgsEL8glBKhas5A9fAPfGYCADVteZOv2+CaAAAAAElFTkSuQmCC)

STÆMPUNK TV

YouTube · 27 jul 2022







](https://www.youtube.com/watch?v=npDaYOgpDaA&t=5)

If you can provide the **exact output from the `lspci` command** and your **Linux distribution**, I can give you the exact command to install your specific driver. 

[](https://askubuntu.com/questions/55868/installing-broadcom-wireless-drivers)

Installing Broadcom Wireless Drivers - Ask Ubuntu

4 ago 2011 — Driver Package Selection: Based on the PCI ID, consult a table to find the recommended driver package, typically either \`firmware-

![](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSB3KW1Un050KSN6__v9mEgxkmyUsXErftp6H2eFYrMC7Fawbym18CCY7OpH7xwjJuv1Bsxfw)

![](https://encrypted-tbn1.gstatic.com/faviconV2?url=https://askubuntu.com&client=AIM&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

Ask Ubuntu

[](https://www.youtube.com/watch?v=npDaYOgpDaA&t=5)

![Miniatura de vídeo relacionado](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxmDiuK_EmpQRmhxqabL4hJ6x5g9FWF7YDUlqb2Azb9CV2dTix)

8m

Wi-Fi Not Working in Linux? Here's a fix for Broadcom ...

![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nys3NzcvNTctNzcrNzc3Nzc3Nzc1Nzg3Nzc3Nzc3KzcwNSs3NzU3Nzc3LDc3NS43Nf/AABEIACAAIAMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAFAwQGBwH/xAAqEAABAwMDAgYCAwAAAAAAAAABAgMEBREhAAYSMUETFCIyUWEHgVJisf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAExIRH/2gAMAwEAAhEDEQA/AGtzfkByp1BdNoNM8+zGS47IVztZKAbkEYtkG/8At9A0fc0ec02ioeFHkL9qQSUqzYAHsfo6w8GXKXKLMNSvEnNmOWWybupUr2H6ulOO4/eun1jYdARQo8BDwjbkbiIVwbdIDqxa90kkHvnroJlpHHHxbVN1Oc3xryZLYpcYealJ4tp481nKyBa/2TqJciKKHJqVQMtsJWEsllvmi56cyAeN+xNhoCtpR6JSEwd2sOIlloIakU5Sh4sdw4UtsX9RuLgfxUTe4tp7ef5Abq8KTT6MtcVbdlOvymBc2ylIByCT3sRY/egqjObpilO0ukeE06S226WCEqPYJAGT1+PnOrdP2pLdYclS5j7FWlEOyCtlCw23Yi3p9SbpBNr3PG1j11LfFmgmNsndbzbyquiFJQwPNNSWlKKVIKkqKbGx9nIpxx5frWgpmz6bGgOtKrVQqKVeEl5phQCCVEWCU5P9uvTWrg02n0aPJBedUqSEJkOvvE2AGE3GB1JsOnK/caD3BusQ2yijtIbybrKLKIyMJ7dSc56YxpEu8f/Z)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVR4AWP4//8/RXgwGMBgzA/EU4H4DBA/B+JPQPwfB/4EVXMGqocfZMAMkCSZeCrIgKsUGHAFZMAXrJIZbf//u+cQMuATA07JCcv+g8H2o///a4bgNASvAXDw4+f//xYJWNVR7AKKw4AqsTCdknQAS4nTgPgsEL8glBKhas5A9fAPfGYCADVteZOv2+CaAAAAAElFTkSuQmCC)

YouTube·STÆMPUNK TV

[](https://www.reddit.com/r/Fedora/comments/1s0g7hh/broadcom_wifi_drivers_how_to_install/)

Broadcom wifi drivers how to install : r/Fedora - Reddit

22 mar 2026 — Don't break it up into pieces, like the wordwrap could fool you into doing. \* Install akmods for your current Linux kernel: sudo d...

![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

![](https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=AIM&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

Reddit·r/Fedora

[](https://wiki.archlinux.org/title/Broadcom_wireless)

Broadcom wireless - ArchWiki

14 abr 2026 — History. Broadcom has a noted history with its support for Wi-Fi devices regarding GNU/Linux. For a good portion of its initial hi...

![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

ArchWiki

[](https://hefnawi.me/posts/broadcom-wifi-on-ubuntu/)

Broadcom WiFi driver for Ubuntu - Ahmed Hefnawi

14 ago 2019 — Procedure. ... This is basically a Broadcom 802.11 Linux STA wireless driver DKMS package, more details on DKMS can be found in th...

![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

hefnawi.me

[](https://gist.github.com/yeenbean/a859ff5f9f90a908cb366e4b14cad830)

installing-the-broadcom-wireless-drivers-on-a-mac-in-ubuntu ...

31 dic 2025 — Additionally, we have to rebuild the initramfs once again and reboot for the driver to start working properly. Ubuntu 23.04. # ins...

![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

Gist

[](https://www.dragonjar.org/drivers-para-soporte-nativo-de-tarjetas-broadcom-en-gnu-linux.xhtml)

Drivers para Soporte Nativo de Tarjetas Broadcom en GNU ...

Drivers para Soporte Nativo de Tarjetas Broadcom en GNU Linux - DragonJAR. Drivers para Soporte Nativo de Tarjetas Broadcom en GNU...

![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

DragonJAR

[](https://www.facebook.com/groups/linuxmintdesktop/posts/2018940999060798/)

How to install BRoadcom WIFI driver on linux mint. - Facebook

16 may 2026 — Manual Driver Installation Steps: To manually install Broadcom Wi-Fi drivers, it is necessary to identify the specific Broadcom ch...

![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

Facebook

[](https://forum.manjaro.org/t/wifi-broadcom-bcm43602/73776)

Wifi broadcom BCM43602 - Network

15 jul 2021 — 02:00.0 Network controller: Broadcom Inc. and subsidiaries BCM43602 802.11ac Wireless LAN SoC (rev 02).

![](https://encrypted-tbn0.gstatic.com/faviconV2?url=https://forum.manjaro.org&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

Manjaro Linux Forum

[](https://www.reddit.com/r/debian/comments/n3bkba/installing_wifi_nic_driver_during_netinst_install/)

Installing wifi NIC driver during netinst install : r/debian

2 may 2021 — That file is provided by the firmware-b43-installer package in Debian.

![](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdnpziJzson1aALLBwpuoHBvOaOZemo7CAjm5vYPFsUFnBb808DhNxiZJ7oNrEMfOBX3Kz0lUdq1p7Py0)

![](https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

Reddit

[](https://www.reddit.com/r/archlinux/comments/bacm86/how_can_i_install_broadcomwl_during_installation/)

How can I install broadcom-wl during installation? : r/archlinux

7 abr 2019 — Comments Section broadcom-wl is available in the community repository, so the AUR packages might not be required (Maybe that Wiki ...

![](https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

Reddit

[](https://bbs.archlinux.org/viewtopic.php?id=225366)

Help with installing broadcom-wl offline archiso / Newbie Corner

21 abr 2017 — Re: Help with installing broadcom-wl offline archiso zachdr1 wrote: Ohhh okay, so where in the installation process should I do th...

![](https://encrypted-tbn1.gstatic.com/faviconV2?url=https://bbs.archlinux.org&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)

Arch Linux Forums

*   [](https://askubuntu.com/questions/55868/installing-broadcom-wireless-drivers)
    
    Installing Broadcom Wireless Drivers - Ask Ubuntu
    
    4 ago 2011 — Driver Package Selection: Based on the PCI ID, consult a table to find the recommended driver package, typically either \`firmware-
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    Ask Ubuntu
    
*   [](https://askubuntu.com/questions/55868/installing-broadcom-wireless-drivers)
    
    Installing Broadcom Wireless Drivers - Ask Ubuntu
    
    4 ago 2011 — Install B43 Packages: The \`firmware-b43-installer\` and \`b43-fwcutter\` packages are commonly used together to install Broadcom driv...
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    Ask Ubuntu
    
*   [](https://www.youtube.com/watch?v=npDaYOgpDaA&t=5)
    
    Wi-Fi Not Working in Linux? Here's a fix for Broadcom ...
    
    27 jul 2022 — call i'm back from the reboot. so what i'm going to do next is address an issue that many macbooks. may experience now a lot of ol...
    
    ![Miniatura de vídeo relacionado](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    8m
    
    ![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nys3NzcvNTctNzcrNzc3Nzc3Nzc1Nzg3Nzc3Nzc3KzcwNSs3NzU3Nzc3LDc3NS43Nf/AABEIACAAIAMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAFAwQGBwH/xAAqEAABAwMDAgYCAwAAAAAAAAABAgMEBREhAAYSMUETFCIyUWEHgVJisf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAExIRH/2gAMAwEAAhEDEQA/AGtzfkByp1BdNoNM8+zGS47IVztZKAbkEYtkG/8At9A0fc0ec02ioeFHkL9qQSUqzYAHsfo6w8GXKXKLMNSvEnNmOWWybupUr2H6ulOO4/eun1jYdARQo8BDwjbkbiIVwbdIDqxa90kkHvnroJlpHHHxbVN1Oc3xryZLYpcYealJ4tp481nKyBa/2TqJciKKHJqVQMtsJWEsllvmi56cyAeN+xNhoCtpR6JSEwd2sOIlloIakU5Sh4sdw4UtsX9RuLgfxUTe4tp7ef5Abq8KTT6MtcVbdlOvymBc2ylIByCT3sRY/egqjObpilO0ukeE06S226WCEqPYJAGT1+PnOrdP2pLdYclS5j7FWlEOyCtlCw23Yi3p9SbpBNr3PG1j11LfFmgmNsndbzbyquiFJQwPNNSWlKKVIKkqKbGx9nIpxx5frWgpmz6bGgOtKrVQqKVeEl5phQCCVEWCU5P9uvTWrg02n0aPJBedUqSEJkOvvE2AGE3GB1JsOnK/caD3BusQ2yijtIbybrKLKIyMJ7dSc56YxpEu8f/Z)
    
    ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVR4AWP4//8/RXgwGMBgzA/EU4H4DBA/B+JPQPwfB/4EVXMGqocfZMAMkCSZeCrIgKsUGHAFZMAXrJIZbf//u+cQMuATA07JCcv+g8H2o///a4bgNASvAXDw4+f//xYJWNVR7AKKw4AqsTCdknQAS4nTgPgsEL8glBKhas5A9fAPfGYCADVteZOv2+CaAAAAAElFTkSuQmCC)
    
    YouTube·STÆMPUNK TV
    
*   [](https://www.reddit.com/r/Fedora/comments/1s0g7hh/broadcom_wifi_drivers_how_to_install/)
    
    Broadcom wifi drivers how to install : r/Fedora - Reddit
    
    22 mar 2026 — Don't break it up into pieces, like the wordwrap could fool you into doing. \* Install akmods for your current Linux kernel: sudo d...
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    Reddit·r/Fedora
    
*   [](https://wiki.archlinux.org/title/Broadcom_wireless)
    
    Broadcom wireless - ArchWiki
    
    14 abr 2026 — History. Broadcom has a noted history with its support for Wi-Fi devices regarding GNU/Linux. For a good portion of its initial hi...
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    ArchWiki
    
*   [](https://hefnawi.me/posts/broadcom-wifi-on-ubuntu/)
    
    Broadcom WiFi driver for Ubuntu - Ahmed Hefnawi
    
    14 ago 2019 — Procedure. ... This is basically a Broadcom 802.11 Linux STA wireless driver DKMS package, more details on DKMS can be found in th...
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    hefnawi.me
    
*   [](https://gist.github.com/yeenbean/a859ff5f9f90a908cb366e4b14cad830)
    
    installing-the-broadcom-wireless-drivers-on-a-mac-in-ubuntu ...
    
    31 dic 2025 — Additionally, we have to rebuild the initramfs once again and reboot for the driver to start working properly. Ubuntu 23.04. # ins...
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    Gist
    
*   [](https://www.dragonjar.org/drivers-para-soporte-nativo-de-tarjetas-broadcom-en-gnu-linux.xhtml)
    
    Drivers para Soporte Nativo de Tarjetas Broadcom en GNU ...
    
    Drivers para Soporte Nativo de Tarjetas Broadcom en GNU Linux - DragonJAR. Drivers para Soporte Nativo de Tarjetas Broadcom en GNU...
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    DragonJAR
    
*   [](https://www.facebook.com/groups/linuxmintdesktop/posts/2018940999060798/)
    
    How to install BRoadcom WIFI driver on linux mint. - Facebook
    
    16 may 2026 — Manual Driver Installation Steps: To manually install Broadcom Wi-Fi drivers, it is necessary to identify the specific Broadcom ch...
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    Facebook
    
*   [](https://www.facebook.com/groups/linuxmintdesktop/posts/2018940999060798/)
    
    How to install BRoadcom WIFI driver on linux mint. - Facebook
    
    16 may 2026 — Alternative Internet Connection for Drivers: If a USB Wi-Fi dongle is unavailable, an Ethernet cable or USB tethering from a mobil...
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    ![](data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)
    
    Facebook
    
*   [](https://forum.manjaro.org/t/wifi-broadcom-bcm43602/73776)
    
    Wifi broadcom BCM43602 - Network
    
    15 jul 2021 — 02:00.0 Network controller: Broadcom Inc. and subsidiaries BCM43602 802.11ac Wireless LAN SoC (rev 02).
    
    ![](https://encrypted-tbn0.gstatic.com/faviconV2?url=https://forum.manjaro.org&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)
    
    Manjaro Linux Forum
    
*   [](https://www.reddit.com/r/debian/comments/n3bkba/installing_wifi_nic_driver_during_netinst_install/)
    
    Installing wifi NIC driver during netinst install : r/debian
    
    2 may 2021 — That file is provided by the firmware-b43-installer package in Debian.
    
    ![](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdnpziJzson1aALLBwpuoHBvOaOZemo7CAjm5vYPFsUFnBb808DhNxiZJ7oNrEMfOBX3Kz0lUdq1p7Py0)
    
    ![](https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)
    
    Reddit
    
*   [](https://www.reddit.com/r/archlinux/comments/bacm86/how_can_i_install_broadcomwl_during_installation/)
    
    How can I install broadcom-wl during installation? : r/archlinux
    
    7 abr 2019 — Comments Section broadcom-wl is available in the community repository, so the AUR packages might not be required (Maybe that Wiki ...
    
    ![](https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)
    
    Reddit
    
*   [](https://bbs.archlinux.org/viewtopic.php?id=225366)
    
    Help with installing broadcom-wl offline archiso / Newbie Corner
    
    21 abr 2017 — Re: Help with installing broadcom-wl offline archiso zachdr1 wrote: Ohhh okay, so where in the installation process should I do th...
    
    ![](https://encrypted-tbn1.gstatic.com/faviconV2?url=https://bbs.archlinux.org&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL)
    
    Arch Linux Forums
    

References:
===========

*   [undefined](undefined)
