#! /usr/local/bin/elixir

fibs = Stream.unfold({1, 1}, fn {a, b} -> {a, {b, a + b}} end)

fibs |> Enum.take(10) |> IO.inspect