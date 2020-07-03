# README
usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|

### Association
- has_many :groups_users
- has_many :messages
- has_many :groups, though :groups_users

groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Association
- has_many :groups
- has_many :users
- has_many :messages

groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

Messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
