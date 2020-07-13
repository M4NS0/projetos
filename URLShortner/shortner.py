# pip install pyshorteners
import pyshorteners

from tkinter import *



class MyWindow:
    def __init__(self, win):  	

        self.lbl1=Label(win, text='Digite a URL')
        
        self.lbl3=Label(win, text='URL Encurtada')
        self.t1=Entry(bd=3)
        self.t2=Entry()
        self.t3=Entry()
       
        self.lbl1.place(x=50, y=50)
        self.t1.place(x=200, y=50)
       
        self.b1=Button(win, text='Encurtar', command=self.add)
        
        self.b1.place(x=400, y=48)
        
        self.lbl3.place(x=50, y=90)
        self.t3.place(x=200, y=90)
        
    def add(self):
        self.t3.delete(0, 'end')
        url=str(self.t1.get())
        s = pyshorteners.Shortener()
        result=s.tinyurl.short(url)
        self.t3.insert(END, str(result))
        f = open("URLs.txt", "a")
        f.write("Original: " +url+ "\nEncurtada: " + result + "\n\n")
        f.close()
     
window=Tk()

mywin=MyWindow(window)
window.title('Encurtador de URL')
window.geometry("500x200+300+300")
window.mainloop()








