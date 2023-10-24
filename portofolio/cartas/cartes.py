#!/usr/bin/python3
# -*- coding: utf-8 -*-
 
import random
import functools
import os
import time

 
cor     = "\U00002665"
diamant = "\U000025C6"
pica    = "\U00002660"
trevol  = "\U00002663"


PALS = [cor, diamant, pica, trevol]
FIGURES = ["J", "Q", "K", "A"]
COLUMNES = 13


def print_ma(ma):
    if len(ma) > COLUMNES:
        print_ma(ma[:-COLUMNES])
    fila = ma[-COLUMNES:]
    for linea in range(4):
        resultat = ""
        for carta in fila:
            resultat = resultat +  carta[linea]
        print(resultat)
    return


def genera_carta(n, pal):
    return [
        " " + ("_"*3) + " ",
        "|" + f"{str(n):3}" + "|",
        "|" + pal.center(3) + "|",
        "|" + str(n).rjust(3,"_") + "|"
    ]
    

def genera_baralla():
    resultat = []
    for pal in PALS:
        for carta in genera_conjunt_pal(pal):
            resultat.append(carta)
    return resultat
    

def divideix_maç(maç):
    tall = len(maç)//5
    tall += random.randint(0, len(maç)//2)
    if tall > len(maç):
        tall = len(maç)
    return maç[:tall], maç[tall:]


def fusiona(a, b):
    resultat = []
    len_gran = len(a) if len(a) > len(b) else len(b)
    for index in range(len_gran):
        if len(a):
            resultat.append(a.pop(0))
        if len(b):
            resultat.append(b.pop(0))
    return resultat

def barreja_01(maç):
    return fusiona(*divideix_maç(maç))


def barreja_02(maç):
    a, b = divideix_maç(maç)
    c, d = divideix_maç(a)
    e, f = divideix_maç(b)
    a = fusiona(c ,e)
    b = fusiona(d, f)
    return fusiona(a, b)


def barreja_03(maç):
    resultat = []
    for i in range(len(maç)):
        resultat.append(maç[i])
    for i in range(len(resultat)):
        origen = random.randint(0, len(resultat) - 1)
        desti = random.randint(0, len(resultat) - 1)
        resultat[origen], resultat[desti] = resultat[desti], resultat[origen]
    return resultat

def genera_conjunt_pal(pal):
    resultat = []
    for n in range(2,11):
        resultat.append(genera_carta(n, pal))
    for f in FIGURES:
        resultat.append(genera_carta(f, pal))
    return resultat


def get_valor_carta(carta):
    """
    >>> get_valor_carta(genera_carta(3, cor))
    3
    >>> get_valor_carta(genera_carta('J', cor))
    10
    >>> get_valor_carta(genera_carta('Q', cor))
    10
    >>> get_valor_carta(genera_carta('K', cor))
    10
    >>> get_valor_carta(genera_carta('A', cor))
    11
    >>> get_valor_carta(genera_carta('10', cor))
    10
    >>> get_valor_carta(genera_carta('2', cor))
    2
    """
    numero=carta[1]
    camp=numero.split("|")
    if camp[1].strip() == "J" or camp[1].strip() == "Q" or camp[1].strip() == "K":
        return 10
    elif camp[1].strip() == "A":
        return 11
    else:
        return int(camp[1].strip())

def get_valors_ma(ma):
    """
    >>> ma = [genera_carta(3, cor), genera_carta(4, trevol)]
    >>> get_valors_ma(ma)
    [3, 4]
    >>> ma.append(genera_carta('J', cor))
    >>> get_valors_ma(ma)
    [3, 4, 10]
    >>> ma.append(genera_carta('A', cor))
    >>> get_valors_ma(ma)
    [3, 4, 10, 11]
    """
    resultat=list(map(get_valor_carta,ma))
    return resultat


def suma_valors_ma(valors):
    """
    · Utilitzar la funció reduce.
    · No modificar el contingut del paràmetre d'entrada valors.
    >>> suma_valors_ma([2, 10, 5])
    17
    >>> suma_valors_ma([2, 10, 11])
    13
    >>> suma_valors_ma([11, 10, 2])
    13
    >>> suma_valors_ma([11, 10])
    21
    >>> suma_valors_ma([10, 11])
    21
    >>> suma_valors_ma([11, 11])
    2
    """
    suma = functools.reduce(lambda x, y:x+y,valors)
    if suma>21:
        suma = functools.reduce(lambda x, y:x+(1 if y==11 else y),valors)
        if valors[0]==11:
            suma-=10
    return suma

def demanar_carta(baralla,ma):
    os.system("clear")
    ma.append(baralla.pop())
    print_ma(ma)
    valors = get_valors_ma(ma)
    puntuacio = suma_valors_ma(valors)
    print(f"Valors: {valors} Puntuació: {puntuacio}\n")
    return puntuacio

def comprova(puntuacio):

    if puntuacio >= 21:
        if puntuacio ==21:
            print("Has guanyat!!\n")
        elif puntuacio >21:
            print("Has perdut.\n")
            return tornar_a_jugar()

def tornar_a_jugar():
        reiniciar=input("Vols tornar a jugar? (S/N)").lower().strip()
        if reiniciar =="s":
            return reinicia()
        elif reiniciar =="n":
            return "0"
        else:
            print("Opcio incorrecta!!")
            return tornar_a_jugar()
            

def plantar(baralla,puntuacio):
    ma=[]
    puntuacio2=0
    while puntuacio2 <17:
        os.system("clear")
        ma.append(baralla.pop())
        valors = get_valors_ma(ma)
        puntuacio2 = suma_valors_ma(valors)
        print_ma(ma)
        print(f"Valors: {valors} Puntuació banca: {puntuacio2} Puntuació jugador: {puntuacio}")
        time.sleep(0.5)

    if puntuacio2 > 21:
        print("Has guanyat!!\n")
    else:
        if puntuacio2 > puntuacio:
            print("Has perdut.\n")
        elif puntuacio2 == puntuacio:
            print("Empat.")
        elif puntuacio2 < puntuacio:
            print("Has guanyat!!\n")
    return tornar_a_jugar()

def menu(baralla):
    baralla_1=baralla
    ma=[]
    opcio=""
    while opcio !="0":
        opcio=input("0.Sortir del programa\n1.Demanar Carta\n2.Plantar-se\n3.Reiniciar joc.\n")
        if opcio == "1":
            puntuacio=demanar_carta(baralla_1,ma)
            opcio=comprova(puntuacio)
        elif opcio == "2":
            try:
                opcio=plantar(baralla_1,puntuacio)
            except UnboundLocalError:
                print("Has de demar almenys una carta per poder plantar t'hi.\n")
        elif opcio == "3":
            opcio=reinicia()

def reinicia():
    os.system("clear")
    main()
    return "0"

def main():
    baralla = genera_baralla()
    baralla_b = barreja_03(baralla)
    baralla_b = barreja_01(baralla_b)
    baralla_b = barreja_02(baralla_b)
    baralla_b = barreja_03(baralla_b)
    menu(baralla_b)
    

   

if __name__ == "__main__":
    main()