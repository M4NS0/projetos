import pyshorteners
import webbrowser
import os
import csv
import tkinter
from tkinter import *


class MyWindow:
    def __init__(self, win):

        # Labels
        self.lbl1 = Label(win, text=' Digite a URL')
        self.lbl1.place(x=60, y=45)
        
        self.lbl3=Label(win, text='URL Encurtada')
        self.lbl3.place(x=60, y=100)
        # Forms
        # input
        self.t1=Entry(bd=1)
        self.t1.place(x=200, y=45)
        self.t1.config(width=39)
        self.t1.config({"background": "Grey"})
        
        # output
        self.t3=Entry()  
        self.t3.place(x=200, y=100)
        self.t3.config(width=39)
        self.t3.config({"background": "Grey"})

        # Buttons
        self.b1=Button(win, text='Encurtar', command=self.add, cursor="hand1", background="Grey", pady=1, padx=20)
        self.b1.place(x=60, y=150)
        
        self.b2=Button(win, text='   Abrir    ', command=self.toBrowser, cursor="hand1", background="Grey", pady=1, padx=20)
        self.b2.place(x=180, y=150)

        self.b3=Button(win, text=' Limpar  ', command=self.clear, cursor="hand1", background="Grey", pady=1, padx=20)
        self.b3.place(x=300, y=150)

        self.b4=Button(win, text='Arquivo ', command=self.openFile, cursor="hand1", background="Grey", pady=1, padx=20)
        self.b4.place(x=420, y=150)

               
    def add(self):
        
        url=str(self.t1.get())
        s = pyshorteners.Shortener()
        
        result=s.tinyurl.short(url)
        self.t3.insert(END, str(result))

        # gravando no Arquivo de Texto        
        f = open("URLs.txt", "a")
        f.write("Original: " +url+ " - Encurtada: " + result + "\n")
        f.close()
        
    def clear(self):
        self.t3.delete(0, END)
        self.t1.delete(0, END)
        
    def toBrowser(self):
        url=str(self.t3.get())
        webbrowser.open_new(url)

    def openFile(self):
        osCommandString = "gedit URLs.txt"
        os.system(osCommandString)

        osCommandString = "notepad.exe URLs.txt"
        os.system(osCommandString)

        
        
        
window=Tk()

mywin=MyWindow(window)
window.title('Encurtador de URL')
window.geometry("600x200+300+300")
window.mainloop()








