#! /usr/local/bin/elixir

fibonacci = Stream.unfold({1, 1}, fn {a, b} -> {a, {b, a + b}} end)

fibonacci |> Enum.take(10) |> IO.inspect