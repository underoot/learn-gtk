#!/usr/bin/gjs


imports.gi.versions.Gtk = "3.0";
const { Gtk } = imports.gi;

Gtk.init(null);


new Map();
let label = new Gtk.Label({
    label: 'Hello'
});
let win = new Gtk.Window({
  title: 'Hello!'
});

win.connect('destroy', () => Gtk.main_quit());
win.add(label);
win.show_all();

Gtk.main();
