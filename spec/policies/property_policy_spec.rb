require 'rails_helper'
require 'pundit/rspec'

RSpec.describe PropertyPolicy, type: :policy do
  subject { described_class.new(user, record) }

  let(:user) { build_stubbed(:user) }
  let(:record) { build_stubbed(:property) }

  it "allows index access for all users" do
    expect(subject.index?).to be true
  end

  it "allows show access for all users" do
    expect(subject.show?).to be true
  end

  it "allows create access for all users" do
    expect(subject.create?).to be true
  end

  it "allows new access for all users" do
    expect(subject.new?).to be true
  end

  it "allows update access for all users" do
    expect(subject.update?).to be true
  end

  it "allows edit access for all users" do
    expect(subject.edit?).to be true
  end

  it "allows destroy access for all users" do
    expect(subject.destroy?).to be true
  end
end
